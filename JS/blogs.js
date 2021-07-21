import "../node_modules/blogtraversy/lib/index";

let url = "";
const usernames = {
  hashnodeUsername: "Prajjwalkapoor",
};
getBlogs("hashnode", usernames).then((res) => {
  console.log("Hashnode Blogs", res);

  url = res[0].url;
  url = url.replace("//", "//prajjwalkapoor.hashnode.dev");
  console.log(url);
});
