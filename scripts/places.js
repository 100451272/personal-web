function comparator_time(a, b) {
    if (Number(a.dataset.time) < Number(b.dataset.time))
        return -1;
    if (Number(a.dataset.time) > Number(b.dataset.time))
        return 1;
    return 0;
}

function comparator_time_inv(a, b) {
    if (Number(a.dataset.time) < Number(b.dataset.time))
        return 1;
    if (Number(a.dataset.time) > Number(b.dataset.time))
        return -1;
    return 0;
}

function comparator_relevance(a, b) {
    if (a.dataset.rel < b.dataset.rel)
        return 1;
    if (a.dataset.rel > b.dataset.rel)
        return -1;
    return 0;
}

// Function to sort Data
function SortData(type) {
    if (type == "[data-time]"){
        var subjects = document.querySelectorAll(type);
        var subjectsArray = Array.from(subjects);
        let sorted = subjectsArray.sort(comparator_time);
        sorted.forEach(e => document.querySelector("#list").appendChild(e));
    }
    else if (type == "[data-time_inv]"){
        var subjects = document.querySelectorAll("[data-time]");
        var subjectsArray = Array.from(subjects);
        let sorted = subjectsArray.sort(comparator_time_inv);
        sorted.forEach(e => document.querySelector("#list").appendChild(e));
    }
    else {
        var subjects = document.querySelectorAll(type);
        var subjectsArray = Array.from(subjects);
        let sorted = subjectsArray.sort(comparator_relevance);
        sorted.forEach(e => document.querySelector("#list").appendChild(e));
    }
}