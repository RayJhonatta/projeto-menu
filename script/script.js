function menuContato() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    if (name === "" || email === "" || telephone === "") {
        Swal.fire ({
            title: "Por favor, preencha os campos!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    if (!email.includes("@")) {
        Swal.fire ({
            title: "Por favor, informe o @ no seu email!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    if (!email.includes("gmail.com")) {
        Swal.fire ({
            title: "Por favor, informe o 'gmail.com' no seu email!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";

    Swal.fire ({
        title: "Contato enviado com sucesso!",
        icon: 'success',
        confirmButtonText: 'Ok'
    });
}