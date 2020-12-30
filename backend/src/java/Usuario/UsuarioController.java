/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Usuario;

import Util.Criptografia;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author alex
 */
public class UsuarioController {

    Usuario usuario = new Usuario();
    UsuarioService usuarioService = new UsuarioService();
    List<Usuario> listaUsuario = new ArrayList<>();

    public void lista() {
        listaUsuario = usuarioService.lista();
    }

    public void salvar() {
        if (!validacoes()) {
            usuario.setSenha(criptografaSenha(usuario.getSenha()));
            usuario.setDataCadastro(new Date());
            usuarioService.salvar(usuario);
        }
    }

    public void deletar() {
        usuarioService.deletar(usuario.getId());
    }

    public String criptografaSenha(String pSenha) {
        return Criptografia.criptografarSHA1(pSenha);
    }

    public boolean validacoes() {
        char c;
        boolean result = false;
        for (int i = 0; i < usuario.getNome().length(); i++) {
            c = usuario.getNome().charAt(i);
            result = String.valueOf(c).matches("[0-9]*");
        }
        if (result) {
            System.out.println("NOME inválido");
            return true;
        }

        //verificando duplicidade de documento
        if (usuarioService.verificaDplDoc(usuario.getDocumento())) {
            System.out.println("DOCUMENTO já foi cadastrado");
            return true;
        }

        return false;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public UsuarioService getUsuarioService() {
        return usuarioService;
    }

    public void setUsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    public List<Usuario> getListaUsuario() {
        return listaUsuario;
    }

    public void setListaUsuario(List<Usuario> listaUsuario) {
        this.listaUsuario = listaUsuario;
    }

}
