import { exec } from "child_process";
import { BASE_API as baseApi, PORT as port } from "./defaultEnvs";

exec(`curl http://localhost:${port}${baseApi}/data`, (error, stdout, stderr) => {
    if (error) { console.error(`[ERROR]: ${error.message}`) }
    if (stderr) { console.info(`stderr: ${stderr}`) }
    console.info(`[INFO]: ${stdout}`)
})
