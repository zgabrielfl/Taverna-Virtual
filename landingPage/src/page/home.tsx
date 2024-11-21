import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Logo from "../assets/images/logo.png"
import Button from "../components/button.tsx";
import Mesa from "../assets/images/Mesa.jpg";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import Guerreiro from "../assets/images/Guerreiro.png";
import Conexao from "../assets/images/Conexao.png";
import Diversao from "../assets/images/diversao.png";
import Forum from "../assets/images/forum.png";

import Cliente1 from "../assets/images/GM.png";
import Cliente2 from "../assets/images/jogadora.png";
import Cliente3 from "../assets/images/iniciante.png";
import Cliente4 from "../assets/images/Influencer.png";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonial.css";
import "../styles/utility.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const toggleBodyOverflow = (isMenuOpen: boolean) => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        };

        toggleBodyOverflow(showMobileMenu);
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <>
            <header className="header-fixed py-sm">
    <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo DonaFrost" width={150} height={120} />
        <div className="desktop-only">
            <ul className="flex gap-1">
                <li><a href="">Home</a></li>
                <li><a href="">Soluções</a></li>
                <li><a href="">Depoimentos</a></li>
                <li><a href="">Preços</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
        <div className="desktop-only">
            <div className="flex items-center">
                <a className="reverse-color ml-lg" href="#">Login</a>
                <Button text="Cadastre-se" />
            </div>
        </div>
        <div className="mobile-menu">
            {showMobileMenu ? (
                <div className="mobile-menu-content">
                    <div className="container flex">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="">Depoimentos</a></li>
                            <li><a href="">Preços</a></li>
                            <li><a href="">Contato</a></li>
                            <li><a className="reverse-color" href="#">Login</a></li>
                        </ul>
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                        </span>
                    </div>
                </div>
            ) : (
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                </span>
            )}
        </div>
    </nav>
</header>




            
            <section id="hero" style={{ position: "relative", backgroundColor: "#f0f4f8", padding: "60px 20px", textAlign: "center", marginTop: "5vh" }}>
                <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-1" }}>
                    <img src={HeroRectangleTwo} alt="Background design" style={{ position: "absolute", top: "10%", left: "5%", maxWidth: "150px" }} />
                    <img src={HeroRectangleOne} alt="Background design" style={{ position: "absolute", bottom: "10%", right: "5%", maxWidth: "150px" }} />
                </div>
                <div className="container content" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "3rem", color: "#2c3e50", marginBottom: "20px" }}>Bem-vindo à <span style={{ color: "#00a8cc" }}>Taverna Virtual</span></h1>
                    <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px", lineHeight: "1.6" }}>
                    Taverna Virtual é uma plataforma online para jogadores de RPG de mesa criarem, compartilharem e participarem de aventuras épicas. Oferecendo ferramentas interativas como tabuleiros virtuais, rolagem de dados, fichas personalizáveis e uma vasta biblioteca de recursos, o site conecta jogadores e mestres ao redor do mundo em um espaço dinâmico e colaborativo. Seja você um veterano ou iniciante, aqui é o lugar para viver histórias inesquecíveis!
                    </p>
                    <div className="flex gap-1" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                        <Button text="Cadastre-se" style={{ padding: "12px 30px", fontSize: "1rem" }} />
                        <Button text="Veja mais" secondary style={{ padding: "12px 30px", fontSize: "1rem" }} />
                    </div>
                </div>
            </section>




            <section id="how-it-works" style={{ backgroundColor: "#ffffff", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "20px" }}>Como Funciona</h2>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px" }}>
            Algumas funcionalidades do nosso site 
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={Guerreiro} alt="Instalação dos Sensores" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>1. Monte sua Aventura</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                No Taverna Virtual, você pode criar e personalizar campanhas de RPG de mesa com sistemas conhecidos como D&D, Pathfinder ou criar um sistema próprio. Escolha mapas, NPCs e tramas para dar vida ao seu universo.
                </p>
            </div>
            
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={Conexao} alt="Monitoramento em Tempo Real" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>2. Jogue em Qualquer Lugar</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                Conecte-se com amigos ou outros jogadores pelo mundo em sessões online interativas, com ferramentas de chat, rolagem de dados integrados e um tabuleiro virtual.
                </p>
            </div>
            
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={Diversao} alt="Análise Inteligente por IA" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>3. Biblioteca de Recursos</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                Acesse um vasto acervo de mapas, fichas de personagens, trilhas sonoras imersivas e itens mágicos para tornar suas campanhas inesquecíveis.
                </p>
            </div>
            
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={Forum} alt="Ações e Otimizações" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>4. Comunidade e Eventos</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                Participe de uma comunidade ativa com fóruns, eventos e torneios. Encontre grupos, compartilhe histórias e descubra novas aventuras criadas por outros jogadores.
                </p>
            </div>
        </div>
    </div>
</section>




            <section className="reviews-section" style={{ backgroundColor: "#f9f9f9", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>O que nossos clientes dizem</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>A opinião dos nossos clientes é fundamental para nossa evolução e sucesso!</p>
        
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={Cliente1} alt="Carlos Mendes" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Lucas M</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Mestre de RPG</p>
                    <p>"Adorei as ferramentas intuitivas para criar campanhas! A integração do tabuleiro virtual e as fichas personalizáveis são incríveis."</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Carlos Mendes</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={Cliente2} alt="Ana Pereira" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Ana C</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Jogadora</p>
                    <p>"Finalmente encontrei um site fácil de usar para jogar com meus amigos à distância. A biblioteca de recursos é super completa!"</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Ana Pereira</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={Cliente3} alt="Jorge Silva" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Rafael P</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Iniciante</p>
                    <p>"Sou novo no RPG e o Taverna Virtual me ajudou a entender as regras e entrar no jogo. A comunidade é muito acolhedora!"</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Jorge Silva</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={Cliente4} alt="Mariana Costa" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Mariana R</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Criadora de Conteúdo</p>
                    <p>"Além de jogar, eu consigo compartilhar minhas aventuras e ganhar feedback de outros jogadores. É um espaço perfeito para criativos!"</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Mariana Costa</a>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</section>






<section id="our-story" style={{ backgroundColor: "#ffffff", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "20px" }}>Sobre nós</h2>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px" }}>
            Como surgiu essa ideia.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
            
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                
                <div style={{ flex: "1 1 500px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>O poblema</h3>
                    <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "15px", lineHeight: "1.6" }}>
                    A ideia do Taverna Virtual surgiu da paixão pelo RPG de mesa e da necessidade de criar um espaço acessível para jogadores se conectarem, independentemente da distância. Muitos de nós enfrentamos desafios para reunir grupos presencialmente ou encontrar ferramentas completas que atendam tanto a iniciantes quanto a veteranos. Queríamos construir algo que unisse as melhores partes do RPG tradicional com as vantagens do digital, criando uma experiência rica, colaborativa e inclusiva.
                    </p>
                   
                    <h3 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>Crescimento e Inovação</h3>
                    <p style={{ fontSize: "1rem", color: "#7f8c8d", lineHeight: "1.6" }}>
                    Nosso objetivo é avançar transformando o Taverna Virtual em referência global para o RPG online, com funcionalidades inovadoras como integração de IA para narrativas dinâmicas, expansão da biblioteca com conteúdo gerado por usuários e eventos exclusivos, como campanhas interativas em tempo real. Queremos ser mais do que uma plataforma; queremos ser o ponto de encontro definitivo para a comunidade de RPG!
                    </p>
                </div>
                
                <div style={{ flex: "1 1 400px" }}>
                    <img 
                        src={Mesa} 
                        alt="Nossa História" 
                        style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }} 
                    />
                </div>
            </div>
            

        </div>
    </div>
</section>







<section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px", textAlign: "center" }}>
    
</section>





<section 
    style={{ 
        backgroundColor: "#e5e7eb", 
        padding: "60px 20px", 
        textAlign: "center", 
        fontFamily: "Arial, sans-serif" 
    }}
>
    <div 
        style={{ 
            maxWidth: "600px", 
            margin: "0 auto", 
            padding: "40px", 
            backgroundColor: "white", 
            borderRadius: "16px", 
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)", 
        }}
    >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", color: "#1e293b" }}>
            Fale Conosco
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#64748b", marginBottom: "30px", lineHeight: "1.6" }}>
            Preencha o formulário abaixo para entrar em contato conosco.
        </p>

        <form 
            action="mailto:seu-email@example.com" 
            method="post" 
            encType="text/plain"
        >
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label 
                    htmlFor="name" 
                    style={{ 
                        fontSize: "1rem", 
                        color: "#1e293b", 
                        fontWeight: "bold" 
                    }}
                >
                    Nome:
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    style={{ 
                        width: "100%", 
                        padding: "12px", 
                        marginTop: "8px", 
                        borderRadius: "8px", 
                        border: "1px solid #d1d5db", 
                        fontSize: "1rem" 
                    }} 
                    required 
                />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label 
                    htmlFor="email" 
                    style={{ 
                        fontSize: "1rem", 
                        color: "#1e293b", 
                        fontWeight: "bold" 
                    }}
                >
                    E-mail:
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    style={{ 
                        width: "100%", 
                        padding: "12px", 
                        marginTop: "8px", 
                        borderRadius: "8px", 
                        border: "1px solid #d1d5db", 
                        fontSize: "1rem" 
                    }} 
                    required 
                />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label 
                    htmlFor="subject" 
                    style={{ 
                        fontSize: "1rem", 
                        color: "#1e293b", 
                        fontWeight: "bold" 
                    }}
                >
                    Assunto:
                </label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    style={{ 
                        width: "100%", 
                        padding: "12px", 
                        marginTop: "8px", 
                        borderRadius: "8px", 
                        border: "1px solid #d1d5db", 
                        fontSize: "1rem" 
                    }} 
                    required 
                />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label 
                    htmlFor="message" 
                    style={{ 
                        fontSize: "1rem", 
                        color: "#1e293b", 
                        fontWeight: "bold" 
                    }}
                >
                    Mensagem:
                </label>
                <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    style={{ 
                        width: "100%", 
                        padding: "12px", 
                        marginTop: "8px", 
                        borderRadius: "8px", 
                        border: "1px solid #d1d5db", 
                        fontSize: "1rem" 
                    }} 
                    required 
                ></textarea>
            </div>

            <button 
                type="submit" 
                style={{ 
                    padding: "14px 30px", 
                    backgroundColor: "#1e293b", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "8px", 
                    fontSize: "1rem", 
                    fontWeight: "bold", 
                    cursor: "pointer", 
                    transition: "background-color 0.3s ease", 
                    width: "100%" 
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#334155")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1e293b")}
            >
                Enviar
            </button>
        </form>
    </div>
</section>







<section 
    id="footer" 
    style={{ 
        backgroundColor: "#1e293b", 
        padding: "50px 20px", 
        color: "#f1f5f9", 
        fontFamily: "Arial, sans-serif"
    }}
>
    <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <img 
            src={Logo} 
            alt="Logo Taverna Virtual" 
            width={100} 
            height={80} 
            style={{ marginBottom: "25px", filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))" }} 
        />
        <p style={{ fontSize: "1.4rem", marginBottom: "25px", lineHeight: "1.6" }}>
            Criando uma melhor experiência!
        </p>

        <div 
            style={{ 
                display: "flex", 
                justifyContent: "center", 
                flexWrap: "wrap", 
                gap: "20px", 
                marginBottom: "30px" 
            }}
        >
            <a 
                href="https://www.instagram.com" 
                target="_blank" 
                style={{ 
                    color: "#38bdf8", 
                    textDecoration: "none", 
                    fontSize: "1rem", 
                    transition: "color 0.3s ease" 
                }}
                onMouseOver={(e) => (e.target.style.color = "#7dd3fc")}
                onMouseOut={(e) => (e.target.style.color = "#38bdf8")}
            >
                Instagram
            </a>
            <a 
                href="https://www.facebook.com" 
                target="_blank" 
                style={{ 
                    color: "#38bdf8", 
                    textDecoration: "none", 
                    fontSize: "1rem", 
                    transition: "color 0.3s ease" 
                }}
                onMouseOver={(e) => (e.target.style.color = "#7dd3fc")}
                onMouseOut={(e) => (e.target.style.color = "#38bdf8")}
            >
                Facebook
            </a>
            <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                style={{ 
                    color: "#38bdf8", 
                    textDecoration: "none", 
                    fontSize: "1rem", 
                    transition: "color 0.3s ease" 
                }}
                onMouseOver={(e) => (e.target.style.color = "#7dd3fc")}
                onMouseOut={(e) => (e.target.style.color = "#38bdf8")}
            >
                LinkedIn
            </a>
        </div>

        <p style={{ marginBottom: "15px", fontSize: "1rem", lineHeight: "1.5" }}>
            Endereço: FAG, 563 - Cascavel, PR
        </p>
        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            Email: 
            <a 
                href="mailto:gcnunes3@minha.fag.edu.br" 
                style={{ color: "#38bdf8", textDecoration: "underline" }}
            >
                gcnunes3@minha.fag.edu.br
            </a>
        </p>
        
        <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#94a3b8" }}>
            &copy; 2024 Taverna Virtual. Todos os direitos reservados.
        </p>
    </div>
</section>





        </>
    );
}
