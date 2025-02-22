import pg from 'pg';
const { Client } = pg;
import bcrypt from 'bcrypt';

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
        console.error('Error al consultar usuarios:', error);
        return { success: false, message: "Error en la base de datos" };
    } finally {
        await client.end();
    }
}

export async function IniciarSesionUsuario(username,password){
    const client = new Client(config);
    try{
        await client.connect();
        const verifyQuery = 'SELECT * FROM usuarios WHERE username = $1';
        const verifyValue = [username];
        const verifyResult = await client.query(verifyQuery,verifyValue);
        
        if(verifyResult.rows.length === 0){
            return { success: false, message: 'Usuario no encontrado' };
        }
        const user = verifyResult.rows[0];
        if (!user.estado) {
            return { success: false, message: 'Usuario inactivo' };
        }
        const passwordCorrect = await bcrypt.compare(password, user.password_hash);
        if(!passwordCorrect){
            return { success: false, message: 'Contraseña incorrecta' };
        }return { success: true, message: 'Usuario Valido', user: {username:user.username, fullname:`${user.nombres} ${user.apellidos}`}};
    }catch (error){
        console.log('Error al iniciar sesion');
        return { success: false, message: 'Error al iniciar sesion' };
    }finally{
        await client.end();
    }
}

