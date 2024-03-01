//listen to radio button change event

const radioGroups_categorie = document.querySelectorAll('input[name="categorie"]');
radioGroups_categorie.forEach(group => {
  group.addEventListener('change', (e) => {

        if (e.target.value == current_catorie) {
            e.target.checked = false;
            current_catorie = null;
            return
        }

        current_catorie = e.target.value;
        updateDetails();
  });
});

const radioGroups_architectuurlaag = document.querySelectorAll('input[name="architectuurlaag"]');
radioGroups_architectuurlaag.forEach(group => {
  group.addEventListener('change', (e) => {
        if (e.target.value == current_architectuurlaag) {
            e.target.checked = false;
            current_architectuurlaag = null;
            return
        }
        current_architectuurlaag = e.target.value;
        updateDetails();
  });
});

const radioGroups_niveau = document.querySelectorAll('input[name="niveau"]');
radioGroups_niveau.forEach(group => {
  group.addEventListener('change', (e) => {
        if (e.target.value == current_niveau) {
            e.target.checked = false;
            current_niveau = null;
            return
        }
        current_niveau = e.target.value;
        updateDetails();
  });
});

current_catorie = null;
current_architectuurlaag = null;
current_niveau = null;

function updateDetails() {
    // <p id="selected-items"></p>
    var selectedItems = document.getElementById('selected-items');
    selectedItems.innerHTML = "";
    if (current_catorie != null) {
        selectedItems.innerHTML += current_catorie + "<br>";
    }
    if (current_architectuurlaag != null) {
        selectedItems.innerHTML += current_architectuurlaag + "<br>";
    }
    if (current_niveau != null) {
        selectedItems.innerHTML += current_niveau + "<br>";
    }

    //            <p id="description">Select items on the cube...</p>

    var description = document.getElementById('description');
    if (current_catorie == null && current_architectuurlaag == null && current_niveau == null) {
        description.innerHTML = "Select items on the cube...";
    } else {
        description.innerHTML = "";
    }
}

