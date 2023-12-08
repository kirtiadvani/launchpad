export default function FS(props: any) {
    return props
}

export async function getStaticProps() {
    const fs = require("fs");
    const pdf = require("pdf-parse");
    if(document !== undefined){
        const file = (document.getElementById("inputRef") as HTMLInputElement)
        .files?.[0];
        if (file) {
            const dataBuffer = fs.readFileSync(file);
            const data = await pdf(dataBuffer);
            return {
                props: {
                    fileName: file.name,
                    fileContent: data.text,
                },
            };
        }
    }
    // const dataBuffer = fs.readFileSync("public/Resume.pdf");
}