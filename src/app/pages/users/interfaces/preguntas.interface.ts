export interface Preguntas {
    idPregunta:     string;
    pregunta:       string;
    respuestas:     Respuestas[];
}

export interface Respuestas {
    [key: string]:  string;
}
