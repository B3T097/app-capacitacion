export interface QuestionsResponse {
    pregunta:   string;
    respuestas: {
        [key: string]: string 
    };
}

// export interface QuestionsResponse {
//     pregunta:   string;
//     respuestas: Respuesta[];
// }

// export interface Respuesta {
//     a?: string;
//     b?: string;
//     c?: string;
//     d?: string;
// }
