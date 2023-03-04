const dropZone = document.querySelector('.drop-zone');
const fileList = document.querySelector('#file-list');

// Add event listeners for dropzone element
dropZone.addEventListener('dragover', DragOver);
dropZone.addEventListener('drop', FileDrop);

// Functions for dropzone element
function DragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
}

function FileDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  for (const file of files) {
    console.log(`File name: ${file.name}, type: ${file.type}, size: ${file.size}`);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const sizeTd = document.createElement('td');
    nameTd.innerText = file.name;
    sizeTd.innerText = `${file.size}`;
    tr.appendChild(nameTd);
    tr.appendChild(sizeTd);
    fileList.appendChild(tr);
  }
}
