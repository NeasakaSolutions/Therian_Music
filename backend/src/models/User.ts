// Importaciones:
import mongoose, { Schema, trusted } from "mongoose";

// Interfaz
interface IUser {
    name: string
    email: string
    password: string
}

// Esquema de users
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trin: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

// Crear el modelo:
const User = mongoose.model<IUser>("User", userSchema);

// Exportar User
export default User;

