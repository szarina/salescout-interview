// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library
import { createClient } from 'redis';
async function manageRedis(): Promise<void> {
    // Your code goes here
    const redisClient = createClient({ url: 'redis://localhost:6379' });
    redisClient.on('error', (err) => console.log('Redis Client Error', err));


    const setValue = async (key: string, value: string): Promise<void> => {
        await redisClient.set(key, value);
    };
    const getValue = async (key: string): Promise<string | null> => {
        return redisClient.get(key);
    };
    setValue("greeting", "hello")
    const value =getValue("greeting");
    console.log(value);
    // const client = await createClient()
    //     .on('error', err => console.log('Redis Client Error', err))
    //
    //
    // await client.set('key', 'value');
    // const value = await client.get('key');
    //
    //
    // console.log(value);
    return

}

module.exports = { manageRedis };