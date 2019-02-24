var text = "Lorem ipsum dolor11-аа  sit amet, consectetur adipisicing elit. Cumque architecto rem dolorum similique doloribus ea quo commodi, dignissimos dolores repellendus iure laudantium pariatur natus unde harum a sed perferendis accusamus. Debitis 11-аа odio officia possimus exercitationem 11-аа repellendus, neque itaque asperiores quos enim eveniet nihil iure a totam amet odit incidunt temporibus fugiat facere, obcaecati quo, modi cupiditate deleniti repudiandae quam ad. Earum minus voluptatem officia 11-аа esse sed aperiam iure necessitatibus tempora 11-аа suscipit architecto obcaecati temporibus numquam atque, ad libero 11-аа accusantium ea reiciendis harum eum vero dolorem nobis, reprehenderit sapiente fugiat autem. Nostrum sed esse accusantium minus at magnam reiciendis inventore magni.";

var regM = text.replace(/11-аа/g, "***");

document.write(text);
document.write("<br>");
document.write("<br>");
document.write(regM);

function check(){
    var phoneNum = document.getElementById("phoneNum");
    var regN = /\+8\(\d{3}\)\d{5}/;
    // +8(063)98079
    console.log(phoneNum.value);
    if (regN.test(phoneNum.value)) {
        console.log("YES");
        phoneNum.className = "trueV";
    }else{
        console.log("NO");
        phoneNum.className = "falseV";
    }
}