import fs from "fs/promises";
    let a = await fs.readFile("prachi.txt");
    let b = await fs.appendFile("prachi.txt", "\n this will run next ");

    console.log(a.toString(), b);
    // binary text -> readable data use toString ()