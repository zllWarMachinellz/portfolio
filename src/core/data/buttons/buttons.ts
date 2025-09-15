import type { IButtons } from "@interfaces/button.interface";
import curriculumIcon from '@assets/logos/icons/curriculum.svg'
import linkedInIcon from '@assets/logos/icons/linkedin.svg' 


export const ButtonsHero: IButtons[] = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/david-torres-burgos-b6b8a7247/",
        icon: linkedInIcon.src ,
    },
    {
        title: "Descargar CV",
        href: "#",
        icon: curriculumIcon.src ,
    }
] 