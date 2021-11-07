export interface responseLogin {
    success:    boolean;
    code:       number;
    data:       user[];
}

export interface user {
    id?:            number;
    nombre:         string;
    correo:         string;
    password:       string;
    area:           string;
    puesto:         string;
}