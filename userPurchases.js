function displayMessage() {
    let username = document.getElementById("user_input").value;
    let emailuser = "";
    let finalvalue = "";
    let i;
    var arr;
    for (i = 0; i < users.length; i++) {
        if (users[i].name == username) {
            emailuser = emailuser + users[i].email;
            finalvalue = finalvalue + '<p><strong>Name: </strong>' + username + '<br>' + '<strong>Email: </strong>' + emailuser + '</p>';
            break;
        }
    }
    document.getElementById("booksstore").innerHTML = finalvalue;
    arr = users[i].bookIds;
    let bookStoreHTMLS = "";
    for (let k = 0; k < arr.length; k++) {
        let check_id = arr[k];
        for (let m = 0; m < bookStore.length; m++) {
            if (bookStore[m]._id == check_id) {
                bookStoreHTMLS += '<table><tbody><tr><td><div><img src="' + bookStore[m].thumbnailUrl +
                    '" alt="" onerror="this.src=\'/images/noImage.jpg\'""/></div></td><td><table><tbody><tr><td><strong>Title : </strong></td><td>' + bookStore[m].title +
                    '</td></tr><tr><td><strong>pageCount : </strong></td><td>' + bookStore[m].pageCount +
                    '</td></tr><tr><td><strong>publishedDate: </strong></td><td>' +
                    (bookStore[m].publishedDate ? bookStore[m].publishedDate.$date : "") +
                    '</td></tr><tr><td valign="top"><strong>Description : </strong></td><td>' + bookStore[m].shortDescription +
                    '</td></tr><tr><td><strong>Authors : </strong></td><td>' + bookStore[m].authors +
                    '</td></tr><tr><td><strong>Categories : </strong></td><td>' + bookStore[m].categories +
                    '</td></tr></tbody></table></td></tr></tbody></table>';
                break;
            }

            
        }
        }
    document.getElementById("user-sub").innerHTML = bookStoreHTMLS;

}