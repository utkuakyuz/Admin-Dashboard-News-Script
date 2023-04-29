/**
 *
 * @param addMinutes
 * @return {number|DOMTimeStamp}
 */
export const addTime = (addMinutes) =>
  new Date().setTime(Date.now() + addMinutes * 60 * 1000);

export const toUpperCaseByTurkish = (str) =>
  str
    .replace(/ğ/g, "Ğ")
    .replace(/ü/g, "Ü")
    .replace(/ş/g, "Ş")
    .replace(/ı/g, "I")
    .replace(/i/g, "İ")
    .replace(/ö/g, "Ö")
    .replace(/ç/g, "Ç")
    .toUpperCase();

export const toEnglishFromTurkish = (str) =>
  str
    .replace(/ğ/g, "G")
    .replace(/ü/g, "U")
    .replace(/ş/g, "S")
    .replace(/ı/g, "I")
    .replace(/i/g, "I")
    .replace(/ö/g, "O")
    .replace(/ç/g, "C")
    .replace(/Ü/g, "U")
    .replace(/Ş/g, "S")
    .replace(/I/g, "I")
    .replace(/İ/g, "I")
    .replace(/Ö/g, "O")
    .replace(/Ç/g, "C")
    .toUpperCase();

export const toLowerCaseByTurkish = (str) =>
  str
    .replace(/Ğ/g, "ğ")
    .replace(/Ü/g, "ü")
    .replace(/Ş/g, "ş")
    .replace(/I/g, "ı")
    .replace(/İ/g, "i")
    .replace(/Ö/g, "ö")
    .replace(/Ç/g, "ç")
    .toLowerCase();

export const toCapitalizeByTurkish = (str) =>
  toUpperCaseByTurkish(str.charAt(0)) + toLowerCaseByTurkish(str.slice(1));

export const move = function (arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
};

export const gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
export const aylist = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
export const kisay = [
  "Ock",
  "Şub",
  "Mrt",
  "Nis",
  "May",
  "Haz",
  "Tem",
  "Ağu",
  "Eyl",
  "Ekm",
  "Kas",
  "Ara",
];

const pad = (number) => (number < 10 ? "0" + number : number);

export const toTitleCase = (str) => {
  return str
    .split(" ")
    .map((a) => {
      return a.toCapitalizeByTurkish();
    })
    .join(" ");
};

export const slide = (liste, oldIndex, newIndex) =>
  move(liste, oldIndex, newIndex);

export const getType = (data, tip) => {
  if (tip === 1) {
    return Object.prototype.toString.call(data) === "[object Object]";
  } else if (tip === 2) {
    return Object.prototype.toString.call(data) === "[object Array]";
  } else if (tip === 3) {
    return Object.prototype.toString.call(data) === "[object String]";
  } else if (tip === 4) {
    return Object.prototype.toString.call(data) === "[object Number]";
  } else if (tip === 5) {
    return Object.prototype.toString.call(data) === "[object Null]";
  }
  return false;
};
export const donus = (alan, deger, float) => {
  if (
    getType(alan, 5) ||
    typeof alan === "undefined" ||
    isNaN(alan) ||
    alan === ""
  )
    return deger;
  const res = float ? parseFloat(alan) : parseInt(alan);
  return isNaN(res) ? deger : res;
};
export const toUnixTime = (params, full = false) => {
  const date = new Date(params);
  return full ? date.getTime() : (date.getTime() / 1000) | 0;
};

export const toShortDate = (
  tar,
  join = "-",
  format = "yyyy-mm-dd",
  full = false,
  sp = " ",
  ml = false
) => {
  let net = "";
  if (format === "yyyy-mm-dd") {
    net =
      pad(tar.getFullYear()) +
      join +
      pad(tar.getMonth() + 1) +
      join +
      pad(tar.getDate());
  } else if (format === "dd-mm-yyyy") {
    net =
      pad(tar.getDate()) +
      join +
      pad(tar.getMonth() + 1) +
      join +
      pad(tar.getFullYear());
  } else {
    net =
      pad(tar.getDate()) +
      join +
      pad(tar.getMonth() + 1) +
      join +
      pad(tar.getFullYear());
  }

  if (full) {
    net += sp + pad(tar.getHours());
    net += ":" + pad(tar.getMinutes());
    net += ":" + pad(tar.getSeconds());
  }
  if (ml) {
    net += "-00:00";
  }

  return net;
};

export const formatDate = (date, nor = 1, full = false, day = false) => {
  if (date === 0) {
    return "-";
  }
  const tar = new Date(date);
  let net = pad(tar.getDate());
  if (nor === 1) {
    net += " " + aylist[tar.getMonth()];
  } else if (nor === 2) {
    net += " " + kisay[tar.getMonth()];
  } else {
    net += " " + pad(tar.getMonth() + 1);
  }
  net += " " + pad(tar.getFullYear());
  if (day) net += " " + gunler[tar.getDay()];

  if (full) {
    net += " " + pad(tar.getHours());
    net += ":" + pad(tar.getMinutes());
    net += ":" + pad(tar.getSeconds());
  }
  return net;
};

export const tiple = (data, durum, sab) => {
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    if (el.v === durum) {
      return el.t;
    }
  }
  return sab || "Tanımsız";
};

export const getIp = (int) => {
  const part1 = int & 255;
  const part2 = (int >> 8) & 255;
  const part3 = (int >> 16) & 255;
  const part4 = (int >> 24) & 255;
  return part4 + "." + part3 + "." + part2 + "." + part1;
};

export const changeDateToDay = (day = 0, add = true, date = new Date()) => {
  const dayToTime = day * 86400000; //one day milliseconds
  return add
    ? new Date(date.getTime() + dayToTime)
    : new Date(date.getTime() - dayToTime);
};
export const addMonths = (date, months) => {
  date.setMonth(date.getMonth() + months);
  return date;
};
export const numberFormat = (number, decimals, decPoint, thousandsSep) => {
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSep === "undefined" ? "," : thousandsSep;
  const dec = typeof decPoint === "undefined" ? "." : decPoint;
  let s = "";
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec);
    return "" + (Math.round(n * k) / k).toFixed(prec);
  };
  //Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};

export const min = (a) => a.val.length >= a.arg;
export const max = (a) => a.val.length <= a.arg;
export const esit = (a) => a.val.length === a.arg;
export const ayni = (a) => a.val !== a.arg;

export const validateTCNumber = (value) => {
  value = value.toString();
  const isEleven = /^[0-9]{11}$/.test(value);
  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(value.substr(i, 1));
  }
  const isRuleX = totalX % 10 === value.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(value.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(value.substr(i, 1));
  }
  const isRuleY = (totalY1 * 7 - totalY2) % 10 === value.substr(9, 0);
  return isEleven && isRuleX && isRuleY;
};

export const formatPhoneNumber = (phone) => {
  if (phone.length === 10) {
    return `(${phone.substr(0, 3)}) ${phone.substr(3, 3)} ${phone.substr(
      6,
      2
    )} ${phone.substr(8, 2)}`;
  } else if (phone.length === 12) {
    return `(${phone.substr(2, 3)}) ${phone.substr(5, 3)} ${phone.substr(
      8,
      2
    )} ${phone.substr(10, 2)}`;
  }
  return phone;
};

export const toShortSentence = (str, kac, nokta) => {
  const maxLength = typeof kac === "number" ? kac : 100;
  if (str.length > maxLength) {
    str = str.substr(0, maxLength+3);
    // str = nokta ? str + "..." : str;
     str = str + "...";
  }
  return str;
};

export const isValidDate = (dateString) => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) != null;
};

export const isNumber = (number) => !isNaN(number);

export const validURL = (str) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + //protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + //domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + //OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + //port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + //query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); //fragment locator
  return !!pattern.test(str);
};

export const hasKey = (data, key) =>
  Object.prototype.hasOwnProperty.call(data, key);

export const convertDateByTimezone = (date, timeZone = "America/New_York") => {
  if (!(date instanceof Date))
    throw new Error("date must be an instance of Date");

  const options = {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat([], options);

  const result = formatter.format(date);
  return toShortDate(new Date(result), "-", "yyyy-mm-dd", true);
};

export const stringChars = ($event) => {
  if (
    $event.charCode === 0 ||
    /[a-zA-ZÖöÇçŞşıİĞğÜü\s]$/.test(String.fromCharCode($event.charCode))
  ) {
    return true;
  } else {
    $event.preventDefault();
  }
};

export const inToStr = ($event) => {
  if (
    $event.charCode === 0 ||
    /[a-z0-9A-Z\.\-\_\ ]$/.test(String.fromCharCode($event.charCode))
  ) {
    return true;
  } else {
    $event.preventDefault();
  }
};

export const inToNumber = ($event) => {
  if (
    $event.charCode === 0 ||
    /[0-9\.\s ]$/.test(String.fromCharCode($event.charCode))
  ) {
    return true;
  } else {
    $event.preventDefault();
  }
};

export const sayfala = (data, kacpg, pgsize) => {
  if (data < pgsize) {
    return [];
  }
  var ilki;
  var kacsyf = Math.ceil(data / pgsize);
  var ebta = Math.min(10, kacsyf);
  if (kacpg > kacsyf) {
    kacpg = kacsyf;
    ilki = kacsyf - ebta;
  } else {
    var yarisi = Math.ceil(ebta / 2);
    ilki =
      kacpg + yarisi > kacsyf
        ? kacsyf + 1 - ebta
        : yarisi + 1 > kacpg
        ? 1
        : kacpg - yarisi;
  }
  ilki = Math.max(1, ilki);
  var list = Array.apply(null, new Array(ebta)).map(function (_, ib) {
    return ilki + ib++;
  });
  if (list.indexOf(1) === -1) {
    list.shift();
    list.unshift(1);
  }
  if (list.indexOf(kacsyf) === -1) {
    list.push(kacsyf);
  }
  return list;
};

function TryParseInt(str, defaultValue) {
  var retValue = defaultValue;
  if (str !== null) {
    if (str.length > 0) {
      if (!isNaN(str)) {
        retValue = parseInt(str);
      }
    }
  }
  return retValue;
}
export function TableSort() {
  var desc = false;
  var table = document.querySelector("table");

  table.querySelectorAll("th").forEach((element, columnNo) => {
    element.addEventListener("click", (event) => {
      sortTable(table, columnNo);
    });
  });
  function sortTable(table, sortColumn) {
    const tableBody = table.querySelector("tbody");
    const tableData = table2data(tableBody);

    if (desc) {
      desc = false;

      tableData.sort((a, b) => {
        if (TryParseInt(a[sortColumn]) == "undefined") {
          if (a[sortColumn] > b[sortColumn]) {
            return 1;
          }
          return -1;
        } else {
          if (TryParseInt(a[sortColumn]) > TryParseInt(b[sortColumn])) {
            return 1;
          }
          return -1;
        }
      });
    } else {
      desc = true;
      tableData.sort((a, b) => {
        if (TryParseInt(a[sortColumn]) == "undefined") {
          if (a[sortColumn] < b[sortColumn]) {
            return 1;
          }
          return -1;
        } else {
          if (TryParseInt(a[sortColumn]) < TryParseInt(b[sortColumn])) {
            return 1;
          }
          return -1;
        }
      });
    }
    data2table(tableBody, tableData);
  }

  function table2data(tableBody) {
    const tableData = [];
    tableBody.querySelectorAll("tr").forEach((row) => {
      const rowData = [];
      row.querySelectorAll("td").forEach((cell) => {
        rowData.push(cell.innerText);
      });
      tableData.push(rowData);
    });
    return tableData;
  }

  function data2table(tableBody, tableData) {
    tableBody.querySelectorAll("tr").forEach((row, i) => {
      const rowData = tableData[i];
      row.querySelectorAll("td").forEach((cell, j) => {
        cell.innerText = rowData[j];
      });
      tableData.push(rowData);
    });
  }
}

export function Paginate(selector, tag, numOfItems) {
  //begin constructor

  var startPage = 1;

  Paginate.numOfItems = numOfItems;

  Paginate.selector = selector;

  //store the selector
  var p = document.getElementById(selector);

  //store the child elements
  var children = p.children;

  //store only the elements to paginate
  Paginate.listItems = [];

  //content to display
  var content = [];

  //store the page buttons
  var buttons = [];

  for (var i = 0; i < children.length; i++) {
    //begin for loop

    if (tag.toUpperCase() === children[i].tagName.toUpperCase()) {
      //begin if then

      //add the targeted list items
      Paginate.listItems.push(children[i].outerHTML);
    } //end if then
  } //end for loop

  content.push(
    "<div id='paginate-content'>" +
      Paginate.listItems.slice(startPage - 1, numOfItems).join("\n\n") +
      "</div>"
  );

  //opening button container
  buttons.push(
    "<br/><div id='page-buttons-container' style='display:contents !important;'>\n"
  );

  //build the page buttons
  for (var j = 1; j <= Math.ceil(Paginate.listItems.length / numOfItems); j++) {
    //begin for loop

    //add the buttons
    buttons.push(
      "\n<span class= 'page-button' id='page-button-" + j + "'>" + j + "</span>"
    );
  } //end for loop

  //closing button container
  buttons.push("\n</div>");

  //add the page buttons
  content.push(buttons.join(""));

  //display the content
  document.getElementById(selector).innerHTML = content.join("");

  //register the pageButtonEvents
  this.pageButtonEvents();
} //end constructor

Paginate.prototype.pageButtonEvents = function () {
  //begin function

  document.querySelector("body").addEventListener("click", function (event) {
    //begin function

    //if the target equals the page-button class
    if (event.target.className === "page-button") {
      //begin if then

      //store the content and buttons
      var content = [];
      var buttons = [];

      //store the page number
      var pageNumber = parseInt(event.target.id.split("-")[2]);

      //update the content
      content.push(
        "<div id='paginate-content'>" +
          Paginate.listItems
            .slice(
              pageNumber * Paginate.numOfItems - Paginate.numOfItems,
              pageNumber * Paginate.numOfItems
            )
            .join("\n\n") +
          "</div>"
      );

      //update the page buttons

      //opening button container
      buttons.push(
        "<br/><div id='page-buttons-container' style='display:contents !important;'>\n"
      );

      //build the page buttons
      for (
        var j = 1;
        j <= Math.ceil(Paginate.listItems.length / Paginate.numOfItems);
        j++
      ) {
        //begin for loop

        //add the buttons
        buttons.push(
          "\n<span " +
            (j == pageNumber
              ? "class='active page-button'"
              : "class='page-button'") +
            " id='page-button-" +
            j +
            "'>" +
            j +
            "</span>"
        );
      } //end for loop

      //closing button container
      buttons.push("\n</div>");

      //add the page buttons
      content.push(buttons.join(""));

      //display the content
      document.getElementById(Paginate.selector).innerHTML = content.join("");
    } //end if then
  }); //end function
}; //end function

export const binaryyadmin = (allUsers,  singleUser,  addUser,  updateUser,  deleteUser,  allComments,  singleComment,  addComment,  deleteComment,  updateComment,  confirmComments,  allNews,  singleNews,  addNews,  updateNews, deleteNews,  confirmNews)=>{
  const permissions =   (((allUsers) * (2 ** 0)) + ((singleUser) * ( 2 ** 1)) + ((addUser) * ( 2 ** 2)) + ((updateUser) * ( 2 ** 3)) + ((deleteUser) * ( 2 ** 4)) + ((allComments) * ( 2 ** 5)) + ((singleComment) * ( 2 ** 6)) + ((addComment) * ( 2 ** 7)) + ((deleteComment) * ( 2 ** 8)) + ((updateComment) * ( 2 ** 9)) + ((confirmComments) * ( 2 ** 10)) + ((allNews) * ( 2 ** 11)) + ((singleNews) * ( 2 ** 12)) + ((addNews) * ( 2 ** 13)) + ((updateNews) * ( 2 ** 14)) + ((deleteNews) * ( 2 ** 15)) +  ((confirmNews) * ( 2 ** 16)));
   return permissions;
 } ;

export const binaryyuser = (allComments, singleComment, addComment, deleteComment, updateComment, allNews, singleNews, addNews, updateNews, deleteNews, updateUser, userFeedback)=>{
const permissions = ((allComments) * (2 ** 0)) + ((singleComment) * (2 ** 1)) + ((addComment) * (2 ** 2)) + ((deleteComment) * (2 ** 3)) + ((updateComment) * (2 ** 4)) + ((allNews) * (2 ** 5)) + ((singleNews) * (2 ** 6)) + ((addNews) * (2 ** 7)) + ((updateNews) * (2 ** 8)) + ((deleteNews) * (2 ** 9)) + ((updateUser) * (2 ** 10)) + ((userFeedback) * (2 ** 11));
 return permissions;
} ;

export const logout = () => {
    localStorage.removeItem("user_token");
    
}
