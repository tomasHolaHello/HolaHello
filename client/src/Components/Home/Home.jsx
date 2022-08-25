import { Serv } from "../Home/Serv";
import { Work } from "../Home/Work";
import { Clients } from "../Home/Clients";
import { HeaderHome } from "../Home/HeaderHome";
import { FooterHome } from "../Home/FooterHome";
import { ModalClient } from "../Home/ModalClient";
import { GalleryWorks } from "./GalleryWorks";

export function Home(){
    return(
        <>
            <HeaderHome />
            <Serv />
            <Work />
            <Clients />
            <FooterHome />
            <ModalClient />
            <GalleryWorks />
        </>
    );
}
