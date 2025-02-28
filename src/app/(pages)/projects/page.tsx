export default function About() {
    return (
        <>
            <h1 className="text-xl font-bold">Projetos</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                    <h4 className="text-muted-foreground underline underline-offset-4">
                        Anime Manager
                    </h4>
                    <p>Website para procurar animes e montar listas com eles</p>
                </div>
            </div>
        </>
    );
}
