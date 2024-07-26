import JSEncrypt from 'jsencrypt';

function encrypt(val) {
    // 实例化一个JSEncrypt对象
    let jse = new JSEncrypt()
    let key
    key = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC31LpVckwg3LqcyHSKOWCqYsx/
UY27PQUxI3ACcgbq7dPngmuxPylWKqARgZAzbmnJGrQJNz4pFMf3o45V8TVV7bn3
H5erQEwPdzn+heFS3g0jwdIsnCGnJHF4FQyQIOONTHE6gn81yB6EkRspVM1cPvNe
hwDPJIwjmXUCF7rVMQIDAQAB
-----END PUBLIC KEY-----`;

    jse.setPublicKey(key)

    // 设置需要加密的字符串
    let encrypted = jse.encrypt(val)
    // 输出加密结果
    // console.log(encrypted)
    return encrypted
}
export default encrypt;