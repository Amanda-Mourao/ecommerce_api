import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URI, { logging: false });

if (sequelize) {
    console.log("Läuft mit db");
}

export default sequelize;