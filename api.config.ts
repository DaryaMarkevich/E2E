import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: "tests/api", 
    timeout: 30000, 
    expect: {
        timeout: 3000,
    },
    retries: 1,
    reporter: [
        ["list"],
        ["html"],
    ],

    use: {
        baseURL: "https://myretro.school.smartup.ru/api/",
        headless: true,
        actionTimeout: 10000,
        extraHTTPHeaders: {
            'Accept': "application/json; charset=UTF-8", 
            'Cookie': "myretro=Fe26.2**c5639419dc3b04d7a750f840222c6e17accde5a8ff1222c5e0aa86bc77ff8005*s33TV8nB6NH84Sre4ttP_w*HuG-Z9P2lpllN44aAwg_bw**6572f348cfc129ecbda29614aad5b2647ff11c51d4f0c992f888c6084bd4b322*GSaEI14TEHHZ-KFCvdxVkhNHFy3-ClxunOYOUp1Uwjw"
        }
    },

    
} ;

export default config;