import { Injectable } from '@angular/core';

@Injectable()

export class DragonballService {
    private guerreros = [
        {
            nombre: 'goku',
            bio:'Son Goku es un saiyan natal del planeta Vegeta cuyo verdadero nombre es Kakarotto. Nació en el año 737 justo cuando su padre Barduck luchaba contra...',
            interpretado: 'Masako Nozawa',
            raza: 'saiyan',
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22f100a0-9956-4385-b924-87f448eb8667/dcsgjky-423a2f9f-0bab-4133-a28a-663a564e9ac2.png/v1/fill/w_1024,h_1639,strp/ssb_son_gokooooooooooomg_u_back_by_nekoar_dcsgjky-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzOSIsInBhdGgiOiJcL2ZcLzIyZjEwMGEwLTk5NTYtNDM4NS1iOTI0LTg3ZjQ0OGViODY2N1wvZGNzZ2preS00MjNhMmY5Zi0wYmFiLTQxMzMtYTI4YS02NjNhNTY0ZTlhYzIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tY7gOT2OMrIy-9nIdGwkrjQx8Vbjq_-aZskapenP8cU'
        },
        {
            nombre: 'Vegeta',
            bio:'Vegeta es un personaje ficticio perteneciente a la raza llamada saiyajin, del manga y anime Dragon Ball. Su nombre proviene de su padre, el Rey Vegeta...',
            interpretado: 'Ryō Horikawa',
            raza: 'saiyan',
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46a7ae82-87d8-4653-b4f3-ec555a0ec7ae/d4ufoh4-65812dc0-4138-44ed-9a05-b8f86b84298b.png/v1/fill/w_900,h_1125,strp/vegeta___lineart38___color_v2_by_prinzvegeta_d4ufoh4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YTdhZTgyLTg3ZDgtNDY1My1iNGYzLWVjNTU1YTBlYzdhZVwvZDR1Zm9oNC02NTgxMmRjMC00MTM4LTQ0ZWQtOWEwNS1iOGY4NmI4NDI5OGIucG5nIiwiaGVpZ2h0IjoiPD0xMTI1Iiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80NmE3YWU4Mi04N2Q4LTQ2NTMtYjRmMy1lYzU1NWEwZWM3YWVcL3ByaW56dmVnZXRhLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Yol3a-Wz145qEdaF9yS2_49SdkwKzjnPdpVsUpAoHsc'
        },
        {
            nombre: 'Majin Buu',
            bio:'Majin Boo, conocido en el doblaje de España como Bubú o Monstruo Buu, en el doblaje estadounidense como Majin Boo..',
            interpretado: 'Scott McNeil',
            raza: 'gordo',
            img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7cbf245-1624-4724-8772-3e83f2832ef5/d5k3h95-99030302-a4d5-47be-be63-98a514052f6a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3Y2JmMjQ1LTE2MjQtNDcyNC04NzcyLTNlODNmMjgzMmVmNVwvZDVrM2g5NS05OTAzMDMwMi1hNGQ1LTQ3YmUtYmU2My05OGE1MTQwNTJmNmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nIKZX9fYHvFOxK_1KA7Pw5fA5tfufkFjCsNHfrGEcno'
        },
        
    ];
    constructor() {
        // console.log("listo para usar el servicio drangon ball");
    }

    getGuerreros() {
        return this.guerreros;
        // return "soy metodo getGuerreros";
    }
    getguerrero(idx){
        return this.guerreros[idx];
    }
}