import React, { useContext, useState } from 'react';
import "./style.css";
import { ThemeToggle } from './ThemeToggle';
import { UserContext } from '../Contexts/UserContext';
import withLoadingIndicator from './withLoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateName, updateNameAndEmail } from '../store/userReducer';

const Main = () => {
    const { setUserName } = useContext(UserContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const theme = useSelector((store) => store.theme);
    const dispatch = useDispatch();
    const handlerSubmit = (e) => {
      e.preventDefault();
      if (name.trim() && email.trim()) {
        dispatch(updateNameAndEmail({ name, email}));
      } else if (email.trim()) {
        dispatch(updateEmail(email));
      }
      else if (name.trim()) {
         dispatch(updateName(name));
      }
      setName("");
      setEmail("");
    };
  
  return (
    
    <main className={theme.theme}>

      <ThemeToggle />
      <form onSubmit={handlerSubmit} >
        <input type='text' placeholder='Ваш login' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input type='email' placeholder='Ваш e-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      
      <button type='submit'>Отправить</button>
      </form>

        <button
            onClick={() =>
            setUserName(prompt("Напишите имя пользователя", "Аня"))
            }>
            Сменить пользователя
        </button>
     
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nesciunt ipsam labore! Voluptatibus dolorum harum placeat cupiditate expedita deleniti tenetur facilis nesciunt, dolore, itaque excepturi officiis! Optio maxime aliquam itaque rerum consequatur maiores, nam illum blanditiis accusantium animi consectetur obcaecati repudiandae, excepturi ad veniam vel qui temporibus voluptas quam hic eveniet rem? Ipsa beatae laudantium, ipsam quis, aliquid, vitae nihil officiis aliquam praesentium atque tempore? Earum sint provident molestias! Quas obcaecati enim nihil soluta, quaerat praesentium. Aperiam dicta cum suscipit, ipsam ea fuga? Modi eaque pariatur sapiente libero, assumenda, fugiat saepe iste debitis totam aperiam neque at omnis cum quod numquam illo natus sed. Vel error eius dolore repellat! Dolorum, quo non laborum officiis iste odit quisquam a aperiam dignissimos magni quod voluptas nihil ullam nostrum accusamus itaque nam fugit autem facere. Quos error magni nulla repellendus veniam culpa numquam consequatur illo placeat iste quisquam architecto est, blanditiis accusamus, eveniet suscipit sunt quo voluptates! Quod praesentium nam, voluptatibus maxime deserunt sapiente fugiat. Qui modi beatae quia nesciunt pariatur aperiam cupiditate dolorum molestiae dolorem reprehenderit ea aspernatur officiis quis est dolores voluptas, neque laborum sed voluptatum facere asperiores quam repellendus iste voluptatibus. Autem nisi, cumque odit ab accusantium obcaecati, dolorem earum adipisci numquam rerum explicabo illo. Dolore doloribus hic ex provident unde aperiam dolores quidem qui iste, aliquam et reprehenderit fuga? Iusto eveniet nulla dolor ab minus fuga laboriosam enim asperiores iste? Repellat rerum, quidem quos possimus vel dolorum ratione illo et. Excepturi sequi velit nobis. Ipsam asperiores aperiam dolore, assumenda, porro voluptas sed impedit neque quas itaque quaerat cumque nihil praesentium distinctio culpa eaque architecto est, cum fuga ipsum aliquid officiis dignissimos. Nobis eveniet, quia nam eius magni delectus, sunt odit, architecto repellendus nulla assumenda harum optio! Consequuntur quis voluptatum cupiditate similique praesentium vero quos fugit doloremque expedita ipsa harum quas commodi suscipit esse, ratione eum delectus incidunt iure velit, excepturi aliquam tempore cum. Ad rerum repellat sed ex expedita dolorem dolore libero. Soluta magnam amet ratione. Magnam ipsa, incidunt odit sint enim provident debitis sed eaque! Aliquam laborum dignissimos exercitationem excepturi distinctio, temporibus molestias libero expedita! Ab rem quidem, vero quod in delectus hic labore rerum sint accusantium ipsum molestias omnis nobis maiores? Deleniti sunt, nulla vero, beatae commodi placeat necessitatibus veniam eligendi laboriosam doloremque tempora dolore magnam ipsam. In, aspernatur. Aliquid autem ipsum mollitia pariatur, voluptate ea! Ullam fugiat nihil non voluptatibus excepturi qui accusamus impedit, nemo corrupti commodi enim cupiditate reprehenderit dolor provident. Provident at quasi, dicta consequuntur libero earum ut vel perferendis ex natus tenetur soluta, ipsam voluptatum eius aut quas animi sed totam nostrum consequatur eos rem quis molestias! Delectus harum laborum est magni doloribus iusto sed nesciunt repellendus debitis fugit. Illo sequi nobis atque esse laudantium voluptas vero doloribus sit laborum. Mollitia perspiciatis deleniti expedita fugit minima voluptate culpa quisquam ex amet atque ad aut soluta obcaecati a iste, animi odit officia magnam placeat, voluptas cupiditate eveniet! Cupiditate, doloribus. Iusto natus accusamus ratione veritatis et unde adipisci amet molestiae obcaecati quos voluptas harum totam voluptate, asperiores repellendus numquam minus consequatur odit molestias possimus delectus repudiandae nesciunt a ullam. Perferendis eveniet fugiat explicabo inventore maiores tempore esse placeat voluptates! Quod corrupti ad placeat, dicta consequuntur nemo harum iste modi nobis sapiente, voluptates quisquam minima inventore repellat ipsum magni dolorem consectetur odio error aut. Debitis cumque ipsum veniam saepe eveniet magni delectus officiis explicabo velit ab culpa, consequatur aspernatur laudantium, sequi nemo qui harum quisquam numquam, molestias et provident quibusdam. Commodi iusto voluptate deserunt aperiam culpa repellendus, reiciendis autem vero quod, sint, qui sit inventore modi alias fugiat quia sapiente vitae voluptatum! Cumque vero iste consequuntur, itaque perspiciatis officia neque fuga odio repudiandae beatae nisi tenetur natus voluptatibus hic soluta autem facere mollitia pariatur quo. Doloribus tempore ex quia laudantium, id repellendus! Unde porro debitis iste enim doloremque, delectus non recusandae omnis aperiam doloribus. Fugit tenetur, est illo perspiciatis atque vitae? Nam, labore explicabo quas placeat dolorem provident illum quis fuga neque pariatur mollitia repellendus in laborum! Quaerat saepe consequuntur quidem ea magnam necessitatibus, commodi nostrum deserunt eligendi. Assumenda exercitationem corrupti culpa, officiis doloremque perspiciatis nostrum quasi architecto cumque ratione totam? Praesentium fuga voluptates laudantium ipsam? Autem iste, minima ipsam ea itaque, dolore voluptatibus placeat consequatur pariatur, tenetur similique et! Mollitia aliquam vero iusto in. Ducimus saepe itaque fugiat dolore culpa quasi. Nam exercitationem ea ipsa explicabo, praesentium expedita adipisci consequatur facilis pariatur totam voluptates quaerat eos quo repudiandae dolor! Neque, quasi explicabo odit asperiores dolores, eos fugit labore, aliquam magnam vitae reiciendis minus perferendis exercitationem repudiandae nam soluta! Ducimus obcaecati rem tenetur sint porro distinctio ipsa officiis fuga expedita corporis. Reiciendis nesciunt, quidem a cumque esse necessitatibus recusandae beatae quia aliquam soluta fuga explicabo consectetur tempore voluptas nihil debitis ea earum illo ipsa ducimus pariatur quasi reprehenderit quaerat. Ipsum distinctio repellat nobis, fugit corporis error iste dolore asperiores cupiditate, aliquam non enim explicabo consectetur id? Assumenda quia animi ipsam aliquam a sed maxime possimus incidunt, numquam earum omnis fugit officiis impedit consequatur minima voluptates inventore hic laboriosam expedita fuga dolor libero nulla voluptatum. Cum sunt modi molestias velit odit ducimus totam minus aperiam sit, officia esse voluptates illum doloribus ipsum corporis, sed labore minima possimus pariatur ex in ullam. Debitis nobis, itaque dolorem sed alias quam molestias facilis? Porro dolore ut veritatis, tempore consequuntur nihil voluptatibus architecto est iste ad sapiente nesciunt quis similique explicabo inventore. Voluptatem quae tenetur sed ipsum doloribus tempora, aspernatur sunt pariatur aperiam vero iste ducimus repudiandae ad culpa non in qui asperiores odio omnis. Ea, numquam! Ducimus vitae illum, ipsa maxime nobis facilis ea porro similique consequatur est numquam inventore dicta enim sit dignissimos, id blanditiis officiis perspiciatis error amet distinctio odio necessitatibus quo ullam. Natus labore temporibus suscipit culpa blanditiis neque, delectus, tempora deleniti odio accusamus perferendis exercitationem itaque dicta cum unde officia vero laboriosam repellendus inventore rem. Doloribus maiores quas, distinctio laudantium quae, odit esse illo repellat quod iure aut blanditiis, tempora neque consequuntur ex ea beatae? Reprehenderit dignissimos placeat explicabo consequatur ipsam nesciunt natus recusandae nam veritatis.
        </div>
        
      
       
    </main>
  );
};
export const MainWithLoading = withLoadingIndicator(Main);

