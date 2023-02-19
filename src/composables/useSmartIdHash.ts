import { useSmartId } from "@/store/smartId";
import { storeToRefs } from 'pinia'

function _arrayBufferToBase64( buffer: any ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

async function calculateVerificationCode(documentHash: any) {
  const buffer = await self.crypto.subtle.digest('SHA-256', documentHash)
  const codearray = new Uint8Array(buffer)
  const firstbyte = codearray[30]
  const secondbyte = codearray[31]
  const positiveInteger = ((firstbyte << 8) + secondbyte) & 0xffff
  const code = positiveInteger.toString()
  const paddedCode = "0000" + code
  return paddedCode.substring(code.length)
}

export function useSmartIdHash() {
  const smartId = useSmartId()
  const { code } = storeToRefs(smartId)

  const generateHash = async () => {
    const array = new Int8Array(64)

    self.crypto.getRandomValues(array);
    const hashBuffer = await self.crypto.subtle.digest('SHA-512', array);
    const hashArray = new Int8Array(hashBuffer)
    const hashEncoded = _arrayBufferToBase64(hashArray)
    code.value = await calculateVerificationCode(hashArray)
    return hashEncoded
  }

  return { code, generateHash }
}
