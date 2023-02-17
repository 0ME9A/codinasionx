export const desc: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus sunt, doloremque quam labore iure maiores cum vero facilis dolor deleniti consequatur, nisi dicta molestiae rerum quaerat, quidem quisquam accusamus, Voluptates doloribus sunt, doloremque quam labore iure maiores cum vero facilis dolor deleniti consequatur, nisi dicta molestiae rerum quaerat, quidem quisquam accusamusVoluptates doloribus sunt, doloremque quam labore`;

export type repoListType = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  repoUrl: string;
  style: string;
}[];

export const repoList: repoListType = [
  {
    id: 1,
    title: "Codinasion Tools",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605661538700-68f27cb6509d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "codinasion",
    style: "",
  },
  {
    id: 2,
    title: "Program",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557626540-ae67a4e1a62a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "codinasion-tools",
    style: " flex-row-reverse border-red",
  },
  {
    id: 3,
    title: "Codinasion Tools",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557833946-8f264331f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "Link-free",
    style: "",
  },
  {
    id: 4,
    title: "Program",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557626569-8e90be178386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "program",
    style: " flex-row-reverse",
  },
];

type testimonialType = {
  id: number;
  name: string;
  text: string;
  imgUrl: string;
  profession: string;
  style: string;
}[];
export const testimonialList: testimonialType = [
  {
    id: 1,
    name: "Denver Knight",
    text: desc,
    imgUrl:
      "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    profession: "Backend developer Amazon",
    style: "",
  },
  {
    id: 2,
    name: "Mical Steav",
    text: desc,
    imgUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profession: "Backend developer Amazon",
    style: "",
  },
  {
    id: 3,
    name: "Jorge Moss",
    text: desc,
    imgUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    profession: "Backend developer Amazon",
    style: "",
  },
  {
    id: 4,
    name: "Sam Samsung",
    text: desc,
    imgUrl:
      "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    profession: "Backend developer Amazon",
    style: "",
  },
  {
    id: 5,
    name: "Lembo faigee",
    text: desc,
    imgUrl:
      "https://images.unsplash.com/photo-1543357530-d91dab30fa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    profession: "Backend developer Amazon",
    style: "",
  },
];
