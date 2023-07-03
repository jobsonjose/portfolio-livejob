import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Volei Vida - Clube de volei de Praia",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Esportes"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Personal Marcelo - Academia e Esportes",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Esportes"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Dripper - Varejo Virtual",
    paragraph:
      "Empresa que atua no mercado de lojas virtuais e está na inovando com o ecommerces próprio. ",
    image: "/images/projetos/projeto-dripper.png",
    author: {
      name: "Anderson Laurentino",
      image: "/images/blog/author-03.png",
      designation: "Sócio da Dripper",
    },
    tags: ["Ecommerces"],
    publishDate: "2023",
  },
];
export default blogData;
