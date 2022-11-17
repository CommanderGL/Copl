import fs from "fs"

const fileData = fs.readFileSync("./project/main.copl").toString()
const cmds = fileData.split(";")

const TOKENS = [
    "js"
]

cmds.forEach(cmd => {
    let args = cmd.split(" ")
    if (TOKENS.includes(args[0])) {
        if (args[0] == "js") {
            if (args.length > 2) {
                console.error(`Too many args passed to 'js'`)
                return
            }
            eval(args[1])
        }
        return
    }
    console.error(`TOKEN '${args[0]} does not exist'`)
})