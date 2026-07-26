const terminal = document.getElementById("terminal");


const lines = [

"Microsoft Windows [Version 11.0.26100]",
"(c) Microsoft Corporation. All rights reserved.\n",

"C:\\Users\\Tirtha> cd Project_Antora",

"C:\\Users\\Tirtha\\Project_Antora> npm start\n",

"Loading project...",

"Checking dependencies...",

"✔ HTML Loaded",

"✔ CSS Loaded",

"✔ JavaScript Loaded",

"",

"Searching database...",

"",

"1 Person Found.",

"",

"Name ............... [ Antora Hazra Antu ]",

"Priority ........... ∞",

"Status ............. Most Important",

"Launching Project..."
];

let line = 0;

let char = 0;

function type(){

    if(line>=lines.length){

    continueBtn.style.display = 'inline-block';

        return;
    }

    if(char<lines[line].length){

        terminal.innerHTML=
        terminal.innerHTML.replace(
            '<span class="cursor">█</span>',
            ''
        );

        terminal.innerHTML+=lines[line][char];

        terminal.innerHTML+='<span class="cursor">█</span>';

        char++;

        setTimeout(type,25);

    }

    else{

        terminal.innerHTML=
        terminal.innerHTML.replace(
            '<span class="cursor">█</span>',
            ''
        );

        terminal.innerHTML+="\n";

        terminal.innerHTML+='<span class="cursor">█</span>';

        line++;

        char=0;

        setTimeout(type,250);

    }

}

type();