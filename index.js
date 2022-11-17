import fs from "fs"

const fileData = fs.readFileSync("./project/main.copl").toString()
const cmds = fileData.split(";").filter(cmd => cmd != '')

const TOKENS = [
    "js"
]

cmds.forEach(cmd => {
    let args = cmd.split(" ")
    if (TOKENS.includes(args[0])) {
        if (args[0] == "js") {
            args = cmd.split(" ", 1)
            console.log(args)
            //eval(args[1])
        }
        return
    }
    console.error(`TOKEN '${args[0]} does not exist'`)
})