const prisma = require("../prisma");

const seed = async () => {
    const createPlayers = async () => {
        const players = [
            { name:"Odin", breed: "Golden Retriever" },
            { name:"Bella", breed: "Labrador Retriever" },
            { name:"Sunshine", breed: "Goldendoodle" },
            { name:"Packer", breed: "Belgian Malinois" },
            { name:"Aspen", breed: "Belgian Malinois" },
            { name:"Hotdog", breed: "Mix" },
            { name:"Nico", breed: "Goldendoodle" },
            { name:"Star", breed: "Siberian Husky" },
            { name:"Lala", breed: "Chihuahua" },
            { name:"Shadow", breed: "Chihuahua" },
        ];
        await prisma.player.createMany({ data:players });
    }

    await createPlayers();
};
seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
    });