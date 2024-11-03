import { renderActiveComponent } from '../../../libraries/LandlordProfileRender';
import './information.scss';

function Information({ toggle, activeComponent }) {
    return (
        <div className={!toggle ? 'information' : 'information istoggle'}>
            {renderActiveComponent(activeComponent)}
        </div>
    );
}

export default Information;
