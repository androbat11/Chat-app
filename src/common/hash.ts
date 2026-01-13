import bcrypt from "bcrypt";

export function generateSalt(): string {
    return bcrypt.genSaltSync(10);
}


export const configHashFactory = {
    async hash(password: string): Promise<string> {
        return bcrypt.hashSync(password, generateSalt())
    },
    async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compareSync(password, hash);
    }
};

