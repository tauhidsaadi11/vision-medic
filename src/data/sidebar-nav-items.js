export default function() {
  return [
    {
      title: "Pasien Baru",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Telah Dilihat",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/telah-dilihat",
    },
    {
      title: "Telah Diagnosa",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/telah-diagnosa",
    },
    {
      title: "Draft",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/draft",
    },
    {
      title: "Pasien Ditandai",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/ditandai",
    },
    {
      title: "",
      htmlBefore: '',
      to: "/user-profile",
    },
    {
      title: "Pengaturan",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/pengaturan",
    }
  ];
}

