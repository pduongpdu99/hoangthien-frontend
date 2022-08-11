let colorKind = "default";
let images = [
  {
    src: "/background/polo/default/1.jpg",
    others: {
      default: [
        ["/background/polo/default/1.jpg", true],
        ["/background/polo/default/2.jpg", false],
        ["/background/polo/default/3.jpg", false],
        ["/background/polo/default/4.jpg", false],
        ["/background/polo/default/5.jpg", false],
      ],
    },
    alt: "image.png",
    title: "Tiêu đề 1",
    colorProvided: [
      {
        color: "red",
        label: "Đỏ",
      },
      {
        color: "blue",
        label: "Xanh biển",
      },
      {
        color: "green",
        label: "Lá cây",
      },
    ],
    price: 1000000000,
    specialPrice: 800000000,
    thongSoKyThuat: {
      sizeGeneral: [4221, 1760, 1612],
      height: 1236, //kg
    },
    stdRequires: {
      phanh: {
        vni: "Đĩa/Tang trống",
        eng: "(Disc/ Drum)",
      },
      abs: true,
      esc: true,
      asr: true,
    },
  },
  {
    src: "/background/tcross/default/1.jpg",
    others: {
      default: [
        ["/background/tcross/default/1.jpg", true],
        ["/background/tcross/default/2.jpg", false],
        ["/background/tcross/default/3.jpg", false],
        ["/background/tcross/default/4.jpg", false],
        ["/background/tcross/default/5.jpg", false],
      ],
    },
    alt: "image.png",
    title: "Tiêu đề 2",
    colorProvided: [
      {
        color: "red",
        label: "Đỏ",
      },
      {
        color: "blue",
        label: "Xanh biển",
      },
      {
        color: "green",
        label: "Lá cây",
      },
    ],
    price: 1000000000,
    specialPrice: 800000000,
    thongSoKyThuat: {
      sizeGeneral: [4221, 1760, 1612],
      height: 1236, //kg
    },
    stdRequires: {
      phanh: {
        vni: "Đĩa/Tang trống",
        eng: "(Disc/ Drum)",
      },
      abs: true,
      esc: true,
      asr: true,
    },
  },
  {
    src: "/background/tiguan/default/1.jpg",
    others: {
      default: [
        ["/background/tiguan/default/1.jpg", true],
        ["/background/tiguan/default/2.jpg", false],
        ["/background/tiguan/default/3.jpg", false],
        ["/background/tiguan/default/4.jpg", false],
        ["/background/tiguan/default/5.jpg", false],
      ],
    },
    alt: "image.png",
    title: "Tiêu đề 3",
    colorProvided: [
      {
        color: "red",
        label: "Đỏ",
      },
      {
        color: "blue",
        label: "Xanh biển",
      },
      {
        color: "green",
        label: "Lá cây",
      },
    ],
    price: 1000000000,
    specialPrice: 800000000,
    thongSoKyThuat: {
      sizeGeneral: [4221, 1760, 1612],
      height: 1236, //kg
    },
    stdRequires: {
      phanh: {
        vni: "Đĩa/Tang trống",
        eng: "(Disc/ Drum)",
      },
      abs: true,
      esc: true,
      asr: true,
    },
  },
  {
    src: "/background/teramont/default/1.jpg",
    others: {
      default: [
        ["/background/teramont/default/1.jpg", true],
        ["/background/teramont/default/2.jpg", false],
        ["/background/teramont/default/3.jpg", false],
        ["/background/teramont/default/4.jpg", false],
        ["/background/teramont/default/5.jpg", false],
      ],
    },
    alt: "image.png",
    title: "Tiêu đề 4",
    colorProvided: [
      {
        color: "red",
        label: "Đỏ",
      },
      {
        color: "blue",
        label: "Xanh biển",
      },
      {
        color: "green",
        label: "Lá cây",
      },
    ],
    price: 1000000000,
    specialPrice: 800000000,
    thongSoKyThuat: {
      sizeGeneral: [4221, 1760, 1612],
      height: 1236, //kg
    },
    stdRequires: {
      phanh: {
        vni: "Đĩa/Tang trống",
        eng: "(Disc/ Drum)",
      },
      abs: true,
      esc: true,
      asr: true,
    },
  },
];

let models = [
  {
    label: "Phiên bản",
    contentKey: "title",
    alias: null,
    content: null,
  },
  {
    label: "Giá đặc biệt",
    contentKey: null,
    alias: "Call VNĐ",
    content: null,
  },
  {
    label: "Thông số kỹ thuật",
    contentKey: null,
    alias: null,
    content: [
      {
        label: "Kích thước tổng thể (DxRxC) (mm)",
        contentKey: ["thongSoKyThuat", "sizeGeneral"],
      },
      {
        label: "Trọng lượng không tải (Kg)",
        contentKey: ["thongSoKyThuat", "height"],
      },
    ],
  },
  {
    label: "Trạng thái tiêu chuẩn",
    description: "HỆ THỐNG AN TOÀN VÀ HỖ TRỢ NGƯỜI LÁI",
    contentKey: null,
    alias: null,
    content: [
      {
        label: "Phanh trước/ sau",
        contentKey: ["stdRequires", "phanh"],
      },
      {
        label: "Hệ thống chống bó cứng phanh ABS",
        contentKey: ["stdRequires", "abs"],
      },
      {
        label: "Hệ thống cân bằng điện tử ESC",
        contentKey: ["stdRequires", "esc"],
      },
      {
        label: "Hệ thống chống trượt khi tăng tốc ASR",
        contentKey: ["stdRequires", "asr"],
      },
    ],
  },
];

const grid = document.getElementById("grid");
grid.innerHTML = images
  .map(
    (image, index) =>
      `
        <div class="w-full relative mb-5 cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showModal(
          ${JSON.stringify(image).replace(/"/g, "'")}, ${index}
        )">
            <img class='w-full img-custom' src="${image.src}" alt="${
        image.alt
      }"/>
            <div class='transition duration-150 ease-in absolute w-full h-full hover:absolute top-0 left-0 hover:bg-black hover:opacity-30'></div>  
        </div>
        `
  )
  .join("\n");

function showModal(image, index) {
  let exampleModalLabel = document.getElementById("exampleModalLabel");
  exampleModalLabel.innerText = "THÔNG SỐ KỸ THUẬT";

  let carInformationField = document.getElementById("car-info");

  carInformationField.innerHTML = models
    .map((item) => {
      let fields = "";
      if (item.content != null && item.content.length > 0) {
        fields = item.content
          .map((i) => {
            let value = images[index];
            i.contentKey.forEach((key) =>
              key === "phanh"
                ? (value = `${value[key].vni} ${value[key].eng}`)
                : key === "sizeGeneral"
                ? (value = value[key].join(" x "))
                : (value = value[key])
            );

            return `<div class="grid grid-cols-2">
              <div>${i.label}</div>
              <div class="text-right text-red-400">
                ${value == true ? "Có" : value == false ? "Không" : value}
              </div>
            </div>`;
          })
          .join("");
      }
      return `<div>
    <div class="mt-5">
      <div class="grid grid-cols-2">
        <div class="font-bold">${item.label}</div>
        <div class="text-right text-red-400">
          ${
            item.contentKey
              ? image[item.contentKey]
              : item.alias
              ? item.alias
              : ""
          }
        </div>
      </div>

      <hr
          style="
            clear: both;
            border-top: 1px solid #e0e0e0;
            height: auto;
            padding-top: 5px;
          "
      />
    </div>

    <div>
        <div class="font-bold text-xm">${
          item.description ? item.description : ""
        }</div>
        ${fields}
    </div>
  </div>`;
    })
    .join("");

  let imageCar = document.getElementById("image-car");
  if (image.others && image.others[colorKind].length > 0) {
    const content = image.others[colorKind]
      .map(
        (i) => `<div class="carousel-item${
          i[1] ? " active" : ""
        } relative float-left w-full">
        <img
          src="${i[0]}"
          class="block w-full rounded"
          alt="${i[0]}"
        />
      </div>`
      )
      .join("");

    const html = `<div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
    <div class="carousel-inner relative w-full overflow-hidden">${content}</div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

    imageCar.innerHTML = html;
    imageCar.classList.remove("h-full");
    imageCar.classList.remove("grid");
    imageCar.setAttribute("style", "height: fit-content");
    imageCar.classList.remove("items-center");
  } else {
    imageCar.innerHTML = `<div class='text-center'>ĐANG CẬP NHẬT HÌNH ẢNH</div>`;
    imageCar.classList.add("h-full");
    imageCar.classList.add("grid");
    imageCar.classList.add("items-center");
    imageCar.setAttribute("style", "");
  }

  console.log(imageCar);
}
