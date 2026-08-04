import { Post } from "@/types/course";

export const MOCK_COURSES: Post[] = [
  {
    id: 1,
    title: "Dominando Riffs de Heavy Metal",
    body: "Aprenda as técnicas essenciais de palhetada alternada, palm muting e criação de riffs pesados no estilo clássico dos anos 80.",
    tags: ["french"],
  },
  {
    id: 2,
    title: "Técnicas Avançadas de Bateria no Metal",
    body: "Aumente sua velocidade de bumbo duplo, domine acentuações em ritmos rápidos e aprenda viradas marcantes.",
    tags: ["magical"],
  },
  {
    id: 3,
    title: "Canto Rasgado e Drive Vocal",
    body: "Desenvolva técnicas de drive e fry scream sem agredir suas cordas vocais, mantendo o controle da respiração.",
    tags: ["crime"],
  },
  {
    id: 4,
    title: "Linhas de Baixo para Thrash Metal",
    body: "Toque com precisão e velocidade acompanhando guitarras rápidas, explorando o uso de palheta e técnicas de slap.",
    tags: ["fiction"],
  },
  {
    id: 5,
    title: "Teoria de Escalas e Solos Neoclássicos",
    body: "Entenda modos gregos, arpejos com sweep picking e a construção de solos marcantes no estilo metal melódico.",
    tags: ["history"],
  },
  {
    id: 6,
    title: "Gravação e Produção de Áudio Pesado",
    body: "Aprenda a equalizar guitarras com alto ganho, ajustar compressores para bateria e mixar uma faixa completa de metal.",
    tags: ["classic"],
  },
];

export function getAllCourses(): Post[] {
  if (typeof window === "undefined") return MOCK_COURSES;

  const savedCustomCourses = JSON.parse(
    localStorage.getItem("custom_courses") || "[]"
  );

  return [...savedCustomCourses, ...MOCK_COURSES];
}

// 📌 FUNÇÃO PARA EXCLUIR O CURSO
export function deleteCourseFromStorage(id: number) {
  if (typeof window === "undefined") return;

  const savedCustomCourses: Post[] = JSON.parse(
    localStorage.getItem("custom_courses") || "[]"
  );

  // Filtra removendo o curso pelo ID
  const updatedCourses = savedCustomCourses.filter((course) => course.id !== id);

  // Salva a lista atualizada de volta no localStorage
  localStorage.setItem("custom_courses", JSON.stringify(updatedCourses));
}