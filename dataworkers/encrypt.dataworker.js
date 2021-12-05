const sjcl = require('sjcl');

exports.encryptPassword = (password) =>
{
    const saltBits = sjcl.random.randomWords(2, 0);
    const salt = sjcl.codec.base64.fromBits(saltBits);
  
    const key = sjcl.codec.base64.fromBits(
        sjcl.misc.pbkdf2(password, saltBits, 2000, 256)
    );
  
    return `${key}$${salt}`;
}

exports.verifyPassword = async(password, storedPasswordHash) =>
{
    try{
        const [_key, _salt] = storedPasswordHash.split('$');     
        const saltBits = sjcl.codec.base64.toBits(_salt);
        const derivedKey = sjcl.misc.pbkdf2(password, saltBits, 2000, 256);
        const derivedBaseKey = sjcl.codec.base64.fromBits(derivedKey);
        
        if (_key != derivedBaseKey) {
            return false;
        }
    
    }
    catch(e)
    {
        return false;
    }

    return true;
}