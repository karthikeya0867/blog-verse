import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const posts = [
    {
      title: "General Awarness",
      author: "Lakshman",
      img: "",
      tag: "",
      uploaded: "2 hours ago",
      expectedRead: "5 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
    {
      title: "Best Songs To Listen",
      author: "Karthikeya",
      img: "",
      tag: "Songs",
      uploaded: "9 hours ago",
      expectedRead: "2 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
    {
      title: "Best Movies To Watch",
      author: "Karthikeya",
      img: "",
      tag: "Movies",
      uploaded: "3 hours ago",
      expectedRead: "4 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
    {
      title: "Java And Spring Boot",
      author: "Sai",
      img: "",
      tag: "Tech",
      uploaded: "12 hours ago",
      expectedRead: "12 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
    {
      title: "Monkey D Luffy",
      author: "Karthikeya",
      img: "",
      tag: "OnePiece",
      uploaded: "2 hours ago",
      expectedRead: "6 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
    {
      title: "Naruto",
      author: "Shankar",
      img: "",
      tag: "Anime",
      uploaded: "3 hours ago",
      expectedRead: "7 mins read",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam. Debitis ea, optio illo qui perspiciatis a necessitatibus vel inventore obcaecati iusto, iure, ex aliquid rerum earum! Ducimus, commodi perferendis.
      Amet, eius. Eos iste et at, doloremque expedita nam possimus cumque impedit quis perspiciatis ipsa fuga, quisquam assumenda tempora dolore nisi necessitatibus libero facere consectetur! Optio et corrupti necessitatibus reprehenderit!
      Nihil corporis, vel molestiae aperiam labore fugit iusto tempore possimus dolor amet voluptatum minus animi, quo aliquid, deleniti eum veritatis quibusdam numquam pariatur! Quos, a cum dolorum quibusdam qui ipsum.
      Modi cumque natus nulla in alias voluptatem rerum magni quisquam debitis iure, illum quae odio temporibus dolorem, atque nihil voluptates expedita excepturi dolores ratione molestias non deleniti perferendis! Quis, architecto.
      Molestiae quas atque vero dolores dicta optio in sed earum excepturi voluptas cupiditate, quod blanditiis harum beatae perferendis modi quisquam laboriosam, deserunt numquam inventore. Repudiandae expedita modi accusantium incidunt hic.
      Recusandae, explicabo eaque doloribus, perspiciatis natus iure laudantium quis voluptatem obcaecati voluptate dolorem nulla suscipit officiis eum labore nostrum molestias hic consequatur dolore sit expedita a doloremque repellat. Saepe, corrupti.
      Officiis exercitationem sint voluptatum sapiente. Dolor voluptatum tenetur ut beatae. Velit rerum culpa iure iste aliquid inventore beatae earum, nulla possimus, fugiat vel neque autem natus laboriosam voluptatibus itaque doloribus?
      Ipsa nobis, doloribus aliquam consequatur eum quis quia accusantium ab temporibus corporis! Quis qui, nesciunt id voluptatibus illo ex nihil mollitia eius. Dolorum officia rem corporis laborum quia enim minima.
      Esse a voluptatum temporibus sint ullam iure quam aut, maiores soluta quibusdam officiis suscipit nisi voluptates doloremque? Laudantium provident, dolor, ullam ea officiis, nesciunt asperiores corrupti repellendus dignissimos omnis libero.
      Aut dignissimos commodi deleniti tempora ab soluta doloribus, dolor officia libero inventore esse molestiae neque aliquam cum voluptas recusandae vitae, architecto odio ducimus modi molestias quaerat. Numquam a modi minus?
      Facilis unde, assumenda asperiores, iusto quisquam veniam reprehenderit, distinctio magni amet ipsa fugit voluptatibus. Ea inventore officia officiis eos tenetur incidunt eius nesciunt magni quod, amet, voluptate, ducimus in veniam.
      Ipsa expedita quo odit dolores nisi neque quaerat non velit! Esse ut voluptatibus natus illo aspernatur excepturi voluptatem dolorem accusamus, praesentium, ducimus commodi deserunt sint cum quia nobis labore hic?
      Sit repellendus animi eligendi, veritatis fugiat dolor maxime consequatur sapiente amet quo non minus culpa fuga voluptate odio nam illum. Consequatur repellendus ullam dignissimos nihil suscipit veritatis doloribus nam eos!
      Consequatur, cumque debitis voluptatem fugiat at amet aut laboriosam explicabo eligendi nobis hic quis perspiciatis impedit architecto voluptates dolorum, magni ipsum ducimus earum vel sunt! Quaerat eligendi reprehenderit soluta neque.
      Vitae earum voluptatem natus deleniti et eius ad, non quae. Iure atque inventore blanditiis esse at autem rerum non hic eos dolorum numquam cumque corrupti reprehenderit voluptas, aliquid dolores suscipit.
      Impedit rem esse distinctio error aut doloremque dolor natus velit nihil ipsa debitis, porro nesciunt mollitia ea exercitationem animi quo quod corrupti, placeat reiciendis! Quidem, libero soluta? Maiores, dolorum. Neque?
      Obcaecati, odit impedit? Velit laboriosam optio eius veritatis at minima a nulla odio suscipit ea odit soluta deleniti rem, ab perspiciatis laborum asperiores debitis, quam temporibus quia nesciunt, fuga voluptates.
      Voluptatum minus modi voluptates, nam, amet explicabo aliquid cumque sapiente dolore perferendis dolores. Itaque explicabo soluta vitae illum minus consequatur alias magni eius voluptate doloribus error dolorum, quis illo. Nemo?
      Quaerat cum at quasi suscipit, id consequuntur aperiam eaque officiis obcaecati magni dolore pariatur, quae laboriosam nostrum. Doloremque, hic quisquam, ad aliquam ea accusantium quis ipsam ipsa, laboriosam saepe doloribus!
      Hic fuga iure in sequi perspiciatis explicabo asperiores harum culpa placeat id beatae iste, porro earum amet eligendi at voluptas deserunt animi nobis ea assumenda dolorum? Consequatur corrupti rem sequi?`,
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div>
          {posts.map((post, index) => {
            return <div> {post.description} <FontAwesomeIcon icon={faBookmark} /> </div>;
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
