import React, { Component } from 'react';
import './allnightlife.css';
import ApiContext from '../ApiContext';
import NightlifeNav from '../NightlifeNav/nightlifenav';

export default class AllNightlife extends Component {
  static contextType = ApiContext;

    render() {
      const Nightclub = this.context.nightlife;
      console.log(this.context)
    return (
      <section className='allnightlife'>
        <NightlifeNav />
        <hr />
        <section className='nightlife'>
          <p className='nightlifeabout'>Daytona Beach draws all kinds of crowds at all times of years. If you love the biker culture, I think you'll find a spot that's just right for you on Main Street. Seabreeze tends to draw a younger crowd with two 18 and up danceclubs. For a more upscale type of venue, feel free to check out what the Ormond tab provides. If you'd like to browse some of these different categores, make sure to use our guide up above that will display the specific venues that fall into each of those categories. We also have information about some adult establishments as well if your night is taking a different kind of turn (I don't judge).</p>
          <ul className='locationholder'>
            {Nightclub.map(clubs =>
              <li key={clubs.club_id} className='individual'>
                <img src={clubs.club_image} id='icon' alt='icon'></img>
                <section className='liholder'>
                  <p className='individualheader'>{clubs.club_name}</p>
                  <p className='contacttext'>Contact<br />
                  Address: {clubs.address_building_number} {clubs.address_street} {clubs.city}, {clubs.club_state} {clubs.address_zipcode}</p>
                </section>
            </li>)}
          </ul>
        </section>
      </section>
    )
  }
}