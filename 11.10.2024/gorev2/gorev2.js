class Kesir {
    constructor(pay, payda) {
        if (payda === 0) {
            throw new Error("Payda sıfır olamaz!");
        }
        this.pay = pay;
        this.payda = payda;
        this.kisalt();
    }

    static ebob(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    kisalt() {
        const ortakBolgen = Kesir.ebob(this.pay, this.payda);
        this.pay /= ortakBolgen;
        this.payda /= ortakBolgen;
    }

    toString() {
        return `${this.pay}/${this.payda}`;
    }

    static topla(kesir1, kesir2) {
        const pay = kesir1.pay * kesir2.payda + kesir2.pay * kesir1.payda;
        const payda = kesir1.payda * kesir2.payda;
        return new Kesir(pay, payda);
    }

    static cikar(kesir1, kesir2) {
        const pay = kesir1.pay * kesir2.payda - kesir2.pay * kesir1.payda;
        const payda = kesir1.payda * kesir2.payda;
        return new Kesir(pay, payda);
    }

    static carp(kesir1, kesir2) {
        const pay = kesir1.pay * kesir2.pay;
        const payda = kesir1.payda * kesir2.payda;
        return new Kesir(pay, payda);
    }

    static bol(kesir1, kesir2) {
        if (kesir2.pay === 0) {
            throw new Error("Bölenin payı sıfır olamaz!");
        }
        const pay = kesir1.pay * kesir2.payda;
        const payda = kesir1.payda * kesir2.pay;
        return new Kesir(pay, payda);
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const kesir1Pay = parseInt(document.getElementById("kesir1Pay").value, 10);
        const kesir1Payda = parseInt(document.getElementById("kesir1Payda").value, 10);
        const kesir2Pay = parseInt(document.getElementById("kesir2Pay").value, 10);
        const kesir2Payda = parseInt(document.getElementById("kesir2Payda").value, 10);

        if (!kesir1Pay || !kesir1Payda || !kesir2Pay || !kesir2Payda) {
            document.getElementById("output").innerText = "Lütfen tüm alanları doldurun!";
            return;
        }

        try {
            const kesir1 = new Kesir(kesir1Pay, kesir1Payda);
            const kesir2 = new Kesir(kesir2Pay, kesir2Payda);

            let sonuc;
            switch (button.id) {
                case "toplama":
                    sonuc = Kesir.topla(kesir1, kesir2);
                    break;
                case "cikarma":
                    sonuc = Kesir.cikar(kesir1, kesir2);
                    break;
                case "carpma":
                    sonuc = Kesir.carp(kesir1, kesir2);
                    break;
                case "bolme":
                    sonuc = Kesir.bol(kesir1, kesir2);
                    break;
            }
            document.getElementById("output").innerText = `Sonuç: ${sonuc.toString()}`;
        } catch (error) {
            document.getElementById("output").innerText = `Hata: ${error.message}`;
        }
    });
});