let result = document.getElementById("result");
import * as tools from "./HTML.js";


result.append(tools.CreaDiv("div", "blabla"));
result.append(tools.CreaLabel("label", "Email : ", "eLabel"));
result.append(tools.CreaInput("input", "email", "eLabel", ""));
result.append(tools.CreaLabel("label", "password", "user-password"));
result.append(tools.CreaInput("input", "password", "user-password", ""));


