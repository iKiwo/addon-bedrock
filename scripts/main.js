import { world, system } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((event) => {
    const sender = event.sender; // Jugador que envió el mensaje
    
    system.run(() => {
        for (const player of world.getAllPlayers()) {
            // Si el jugador NO es el remitente, reproduce el sonido
            if (player.id !== sender.id) { // Comparación por ID (más confiable que name)
                try {
                    player.runCommand(`playsound random.orb @s`);
                } catch (error) {
                    console.warn(`Error con ${player.name}: ${error}`);
                }
            }
        }
    });
});