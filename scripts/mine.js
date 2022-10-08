const { moveBlocks, sleep } = require("../utils/move-blocks")

const BLOCKS = 2
const SLEEP_AMOUNT = 1000

async function move() {
    await moveBlocks(BLOCKS, (sleepAmount = SLEEP_AMOUNT))
}

move()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
