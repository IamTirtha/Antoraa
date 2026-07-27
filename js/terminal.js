const output = document.getElementById("output");
const input = document.getElementById("terminalInput");

let step = 0;


const ALLOWED_NAME = "Antu";          // Antu
const ALLOWED_DOB = "2004-07-05";     // 2004-07-05

showIntro();

function showIntro() {
    print("Developer Authentication System v1.0");
    print("");
    print("Status : ONLINE");
    print("");
    print("Only authorised user may continue.");
    print("");
    print("Enter your name");
}

function print(text) {
    output.innerHTML += `<p>${text}</p>`;
}

input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const value = input.value.trim(); // remove extra spaces
    input.value = "";

    if (step === 0) {
        // Step 0: User enters name
        print("> " + value);
        print("");

        // Save the name for later check (optional: you can also check immediately)
        const enteredName = value;

        print("Name recorded.");
        print("");
        print("Enter your date of birth (YYYY-MM-DD)");
        input.type = "text"; // keep as text so they can see what they type
        step++;

        // Store the name temporarily (you could also use a variable outside if you prefer)
        input.dataset.userName = enteredName;

    } else if (step === 1) {
        // Step 1: User enters date of birth as password
        const enteredName = input.dataset.userName || "";
        const enteredDob = value;

        print("> " + enteredName);
        print("> " + "********");
        print("");
        print("Checking Credentials...");

        setTimeout(() => {
            print("");
            print("Decrypting Memories...");
        }, 1000);

        setTimeout(() => {
            print("");

            // Check both name and date of birth
            const nameOk = enteredName.toLowerCase() === ALLOWED_NAME.toLowerCase();
            const dobOk = enteredDob === ALLOWED_DOB;

            if (nameOk && dobOk) {
                print("ACCESS GRANTED");
                showLoader("Decrypting Memories...");
                setTimeout(() => {
                    window.location.href = "../boot/index.html";
                }, 1500);
            } else {
                print("ACCESS DENIED");
                print("Incorrect name or date of birth.");
                // Optionally reset to step 0 to try again:
                // step = 0;
                // input.dataset.userName = "";
                // print("");
                // print("Enter your name");
            }
        }, 2500);
    }
});