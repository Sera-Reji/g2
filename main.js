var image = ["https://media.istockphoto.com/vectors/happy-family-cartoon-vector-illustration-vector-id818808918?k=6&m=818808918&s=612x612&w=0&h=SkJNPpwbXqUaiMLbokOY37s1zlJ68Kg-9sbRR9BbMeY=",
"file:///C:/Users/Reji/Desktop/white%20hat/IMG_20180925_132556.jpg",
"file:///C:/Users/Reji/Desktop/white%20hat/1555235881002.jpg",
"file:///C:/Users/Reji/Desktop/white%20hat/1554702059395.jpg",
"file:///C:/Users/Reji/Desktop/white%20hat/sera5.jpg"];
var name1 = ["My Family Book","Father","Mother","Lil Brother","Me"];
var name2 = ["    ","Reji Joseph Ponnor","Sindhu Reji","Midhun .S. Reji Ponnor","Sera Reji Ponnor"];
var i = 0;
function update() {
    i++
    var number_of_family_member_in_array = 5;
    if(number_of_family_member_in_array) {
        i = 0;
    }
    var updateImage = image[i];
    var updateName1 = name1[i];
    var updateName2 = name2[i];
    document.getElementById("family_member").src=updateImage;
    document.getElementById("family_member_name1").innerHTML=updateName1;
    document.getElementById("family_member_name2").innerHTML=updateName2;
}