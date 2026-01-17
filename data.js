<script>
function convertDriveLink(url) {
  if (url.includes("drive.google.com/file/d/")) {
    let id = url.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  return url;
}

function getData() {
  return JSON.parse(localStorage.getItem("restaurants")) || [];
}

function saveData(d) {
  localStorage.setItem("restaurants", JSON.stringify(d));
}
</script>
