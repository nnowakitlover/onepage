import React from 'react';
import '../../styles/Specs.css';

const Specs = () => {
    return (
        <section id="specs">
        <span>Specjalizacje</span>
        <div className="businessEntities">
            <span><i class="fas fa-landmark"></i> Podmioty Gospodarcze</span>
            <ul>
                <li>Rejestracja podmiotów gospodarczych</li>
                <li>Bieżąca obsługa prawna</li>
                <li>Reprezentowanie przedsiębiorców przed sądami</li>
                <li>Windykacja należności</li>
                <li>Opinie prawne</li>
                <li>Arbitraż krajowy i międzynarodowy</li>
                <li>Udział w negocjacjach handlowych</li>
            </ul>
        </div>
        <div className="dueDilligence">
            <span><i class="fas fa-donate"></i> Due Dilligence</span>
            <ul>
                <li>Wielopłaszczyznowa analiza przedsiębiorstw</li>
                <li>Analiza prawna, finansowa, podatkowa</li>
                <li>Określenie istniejącego i potencjalnego ryzyka związanego z planowaną transakcją kapitałową</li>
                <li>Fuzje, przejęcia, łączenie spółek</li>
                <li>Obsługa prawna restrukturyzacji przedsiębiorstw</li>
            </ul>
        </div>
    </section>
    );
}
 
export default Specs;