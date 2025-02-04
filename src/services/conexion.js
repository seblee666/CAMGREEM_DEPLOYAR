import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'logincamgreen_db_user',
    host: 'dpg-cu471ntds78s739p6gbg-a.oregon-postgres.render.com',
    database: 'logincamgreen_db',
    password: 'DBkUdi9tt7QxiqKGRRfNrVOS1REE38hx',
    port: 5432,
    ssl:
        {
            rejectUnauthorized: false
        }
}
export async function Conectar(params) {
    const client = new Client(config);
    try{
        await client.connect();
        console.log('Conectado a la base de datos');
    }catch(error){
        console.log('Error al conectar a la base de datos');
    }
}
export async function ConsultarUsuarios(){
    const client = new Client(config);
    try{
        await client.connect();
        const result = await client.query('SELECT * FROM usuarios');
        return result.rows;
    }catch(error){
        console.log('Error al consultar usuarios');
    }
}

