function modInverse(e, phi){
    let m0 = phi, t, q;
    let x0 = 0, x1 = 1;

    if(phi === 1){
        return 0;
    }

    while(e > 1){
        q = Math.floor(e / phi);
        t = phi;

        phi = e % phi, e = t;

        t = x0; 
        x0 = x1 - q * x0;
        x1 = t;
    }

    if(x1 < 0){
        x1 += m0;
    }
    return x1;
}